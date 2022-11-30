#!/usr/bin/env node

process.env.GRPC_VERBOSITY='debug'
import * as grpc from "grpc";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
var winston = require("winston");
import {
  PactPluginService,
  IPactPluginServer
} from "./node/static_codegen/plugin_grpc_pb";
import {
  InitPluginRequest,
  InitPluginResponse,
  Catalogue,
  CompareContentsRequest,
  CompareContentsResponse,
  ConfigureInteractionRequest,
  ConfigureInteractionResponse,
  GenerateContentRequest,
  GenerateContentResponse,
  MockServerRequest,
  MockServerResults,
  ShutdownMockServerRequest,
  ShutdownMockServerResponse,
  StartMockServerRequest,
  StartMockServerResponse,
  VerificationPreparationRequest,
  VerificationPreparationResponse,
  VerifyInteractionRequest,
  VerifyInteractionResponse,
  CatalogueEntry,
  InteractionResponse,
  Body,
  MockServerDetails,
  MockServerResult
} from "./node/static_codegen/plugin_pb";
import { Message } from "google-protobuf";
import { BytesValue } from "google-protobuf/google/protobuf/wrappers_pb";
import { AddressInfo, createServer } from "net";
const randomUUID = require("crypto").randomUUID;
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
    new winston.transports.Console()
  ]
});
// @ts-ignore
class ServerImpl implements IPactPluginServer {
  public initPlugin(
    call: grpc.ServerUnaryCall<InitPluginRequest>,
    callback: grpc.sendUnaryData<InitPluginResponse>
  ) {
    try{
    logger.info("initPlugin req");
    logger.info(call.request.toObject());
    const response = new InitPluginResponse();
    const catalogueEntryContentMatchers = new CatalogueEntry()
      .setType(CatalogueEntry.EntryType.CONTENT_MATCHER)
      .setKey("matt");
    catalogueEntryContentMatchers
      .getValuesMap()
      .set("content-types", "text/matt;application/matt");
    const catalogueEntryTransport = new CatalogueEntry()
      .setType(CatalogueEntry.EntryType.TRANSPORT)
      .setKey("matt");
    response.setCatalogueList([
      // catalogueEntryTransport,
      catalogueEntryContentMatchers
    ]);
    callback(null, response);    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  public updateCatalogue(
    call: grpc.ServerUnaryCall<Catalogue>,
    callback: grpc.sendUnaryData<google_protobuf_empty_pb.Empty>
  ) {
    try {
    logger.info("updateCatalogue req");
    logger.info(call.request.toObject());
    const response = new google_protobuf_empty_pb.Empty();
    callback(null, response);
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
  }
  public compareContents(
    call: grpc.ServerUnaryCall<CompareContentsRequest>,
    callback: grpc.sendUnaryData<CompareContentsResponse>
  ) {
    logger.info("compareContents req");
    logger.info(call.request.toObject());
    logger.info('actual',call.request.getActual().toObject());
    logger.info('expected',call.request.getExpected().toObject());
    logger.info(call.request.getActual().getContent())
    logger.info(call.request.getActual().getContent().toString())
    logger.info(call.request.getExpected().getContent())
    logger.info(call.request.getExpected().getContent().toString())
    const response = new CompareContentsResponse();
    if (atob(call.request.getActual().getContent().toString()) === call.request.getExpected().getContent().toString()){
      logger.info(call.request.getExpected());
    } else{
      response.setError('mismatch')

    }
    response.clearResultsMap()
    callback(null, response);
  }
  public configureInteraction(
    call: grpc.ServerUnaryCall<ConfigureInteractionRequest>,
    callback: grpc.sendUnaryData<ConfigureInteractionResponse>
  ) {
    try {
      logger.info("configureInteraction req");
      logger.info(call.request.toObject());
  // let hasRequestBody = false
  // let hasResponseBody = false
      const hasRequestBody = call.request
        .getContentsconfig()
        .getFieldsMap()
        .has("request")
      const hasResponseBody = call.request
        .getContentsconfig()
        .getFieldsMap().has('response')
  logger.info(hasRequestBody)
  logger.info(hasResponseBody)
      const interactions = new ConfigureInteractionResponse();
      const interaction = new InteractionResponse();
      if (hasRequestBody) {
        logger.info('getting requestBody')
  
        const requestBody = call.request
        .getContentsconfig()
        .getFieldsMap()
        .get("request")
        .getStructValue()
        .getFieldsMap()
        .get("body")
        .getStringValue();
        logger.info('got requestBody',requestBody)

        interaction.setContents(
          new Body()
            .setContenttype("application/matt")
            .setContent(new BytesValue().setValue(`MATT${requestBody}MATT`))
        );
        interaction.setPartname("request");
        interaction.setInteractionmarkup(`MATT${requestBody}MATT`);
        interactions.addInteraction(interaction);
      }
      if (hasResponseBody) {
        logger.info('getting responseBody')
  
        const responseBody = call.request
        .getContentsconfig()
        .getFieldsMap()
        .get("response")
        .getStructValue()
        .getFieldsMap()
        .get("body")
        .getStringValue();
        logger.info('got responseBody',responseBody)

        interaction.setContents(
          new Body()
            .setContenttype("application/matt")
            .setContent(new BytesValue().setValue(`MATT${responseBody}MATT`))
        );
        interaction.setPartname("response");
        interaction.setInteractionmarkup(`MATT${responseBody}MATT`);
        interactions.addInteraction(interaction);
      }
      logger.info('sending interactions',interactions.toObject())

      callback(null, interactions);
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }

  }
  // public generateContent(
  //   call: grpc.ServerUnaryCall<GenerateContentRequest>,
  //   callback: grpc.sendUnaryData<GenerateContentResponse>
  // ) {
  //   logger.info("generateContent req");
  //   logger.info(call.request.toObject());
  //   const response = new GenerateContentResponse().setContents();
  //   callback(null, response);
  // }
  public async startMockServer(
    call: grpc.ServerUnaryCall<StartMockServerRequest>,
    callback: grpc.sendUnaryData<StartMockServerResponse>
  ) {
    logger.info("startMockServer req");
    logger.info(call.request.toObject());
    const hostInterface = call.request.getHostinterface();
    let port = Number(call.request.getPort());
    const id = randomUUID();
    if (port === 0) {
      port = (await getFreePort()) as number;
    }
    const response = new StartMockServerResponse();

    if (!port) {
      response.setError("ERROR unable to find a free port");
      return callback(null, response);
    }

    // this is where we start a mock server
    // startTCPServer(id, port)
    const mockServerAddress = `tcp://${hostInterface}:${port}`;

    response.setDetails(
      new MockServerDetails()
        .setKey(id)
        .setPort(port)
        .setAddress(mockServerAddress)
    );
    callback(null, response);
  }
  public shutdownMockServer(
    call: grpc.ServerUnaryCall<ShutdownMockServerRequest>,
    callback: grpc.sendUnaryData<ShutdownMockServerResponse>
  ) {
    logger.info("shutdownMockServer req");
    logger.info(call.request.toObject());
    //   err := stopTCPServer(req.ServerKey)
    const err = true;
    const response = new ShutdownMockServerResponse();
    if (err) {
      response.setOk(false);
      response.addResults(
        new MockServerResult().setError("Failed to shutdown server")
      );
      return callback(null, response);
    }
    response.setOk(true);
    callback(null, response);
  }
  public getMockServerResults(
    call: grpc.ServerUnaryCall<MockServerRequest>,
    callback: grpc.sendUnaryData<MockServerResults>
  ) {
    logger.info("getMockServerResults req");

    const response = new MockServerResults();
    // TODO: error if server not called, or mismatches found
    response.setOk(true);
    callback(null, response);
  }
  // public prepareInteractionForVerification(
  //   call: grpc.ServerUnaryCall<VerificationPreparationRequest>,
  //   callback: grpc.sendUnaryData<VerificationPreparationResponse>
  // ) {
  //   logger.info("prepareInteractionForVerification req");
  //   logger.info(call.request.toObject());

  //   const response = new VerificationPreparationResponse();
  //   callback(null, response);
  // }
  // public verifyInteraction(
  //   call: grpc.ServerUnaryCall<VerifyInteractionRequest>,
  //   callback: grpc.sendUnaryData<VerifyInteractionResponse>
  // ) {
  //   logger.info("verifyInteraction req");
  //   logger.info(call.request.toObject());

  //   const response = new VerifyInteractionResponse();
  //   callback(null, response);
  // }
}

async function startServer() {
  const server = new grpc.Server();
  const port = await getFreePort();

  server.addService(PactPluginService, new ServerImpl());
  server.bind(`127.0.0.1:${port}`, grpc.ServerCredentials.createInsecure());
  server.start();

  const serverKey = randomUUID();
  console.log(JSON.stringify({ port, serverKey }));
  logger.info(JSON.stringify({ port, serverKey }));
}

process.on("uncaughtException", (err) => {
  console.error(`process on uncaughtException error: ${err}`);
});

process.on("unhandledRejection", (err) => {
  console.error(`process on unhandledRejection error: ${err}`);
});
startServer()


async function getFreePort(): Promise<unknown> {
  return new Promise((res) => {
    const srv = createServer();
    srv.listen(0, () => {
      if (srv) {
      }
      const address = srv.address() as AddressInfo;
      srv.close((err) => res(address.port));
    });
  });
}
