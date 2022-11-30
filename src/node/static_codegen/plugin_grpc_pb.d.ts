// package: io.pact.plugin
// file: plugin.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as plugin_pb from "./plugin_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
export type Empty = google_protobuf_empty_pb.Empty
export type Struct = google_protobuf_struct_pb.Struct


interface IPactPluginService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    initPlugin: IPactPluginService_IInitPlugin;
    updateCatalogue: IPactPluginService_IUpdateCatalogue;
    compareContents: IPactPluginService_ICompareContents;
    configureInteraction: IPactPluginService_IConfigureInteraction;
    generateContent: IPactPluginService_IGenerateContent;
    startMockServer: IPactPluginService_IStartMockServer;
    shutdownMockServer: IPactPluginService_IShutdownMockServer;
    getMockServerResults: IPactPluginService_IGetMockServerResults;
    prepareInteractionForVerification: IPactPluginService_IPrepareInteractionForVerification;
    verifyInteraction: IPactPluginService_IVerifyInteraction;
}

interface IPactPluginService_IInitPlugin extends grpc.MethodDefinition<plugin_pb.InitPluginRequest, plugin_pb.InitPluginResponse> {
    path: "/io.pact.plugin.PactPlugin/InitPlugin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plugin_pb.InitPluginRequest>;
    requestDeserialize: grpc.deserialize<plugin_pb.InitPluginRequest>;
    responseSerialize: grpc.serialize<plugin_pb.InitPluginResponse>;
    responseDeserialize: grpc.deserialize<plugin_pb.InitPluginResponse>;
}
interface IPactPluginService_IUpdateCatalogue extends grpc.MethodDefinition<plugin_pb.Catalogue, google_protobuf_empty_pb.Empty> {
    path: "/io.pact.plugin.PactPlugin/UpdateCatalogue";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plugin_pb.Catalogue>;
    requestDeserialize: grpc.deserialize<plugin_pb.Catalogue>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IPactPluginService_ICompareContents extends grpc.MethodDefinition<plugin_pb.CompareContentsRequest, plugin_pb.CompareContentsResponse> {
    path: "/io.pact.plugin.PactPlugin/CompareContents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plugin_pb.CompareContentsRequest>;
    requestDeserialize: grpc.deserialize<plugin_pb.CompareContentsRequest>;
    responseSerialize: grpc.serialize<plugin_pb.CompareContentsResponse>;
    responseDeserialize: grpc.deserialize<plugin_pb.CompareContentsResponse>;
}
interface IPactPluginService_IConfigureInteraction extends grpc.MethodDefinition<plugin_pb.ConfigureInteractionRequest, plugin_pb.ConfigureInteractionResponse> {
    path: "/io.pact.plugin.PactPlugin/ConfigureInteraction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plugin_pb.ConfigureInteractionRequest>;
    requestDeserialize: grpc.deserialize<plugin_pb.ConfigureInteractionRequest>;
    responseSerialize: grpc.serialize<plugin_pb.ConfigureInteractionResponse>;
    responseDeserialize: grpc.deserialize<plugin_pb.ConfigureInteractionResponse>;
}
interface IPactPluginService_IGenerateContent extends grpc.MethodDefinition<plugin_pb.GenerateContentRequest, plugin_pb.GenerateContentResponse> {
    path: "/io.pact.plugin.PactPlugin/GenerateContent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plugin_pb.GenerateContentRequest>;
    requestDeserialize: grpc.deserialize<plugin_pb.GenerateContentRequest>;
    responseSerialize: grpc.serialize<plugin_pb.GenerateContentResponse>;
    responseDeserialize: grpc.deserialize<plugin_pb.GenerateContentResponse>;
}
interface IPactPluginService_IStartMockServer extends grpc.MethodDefinition<plugin_pb.StartMockServerRequest, plugin_pb.StartMockServerResponse> {
    path: "/io.pact.plugin.PactPlugin/StartMockServer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plugin_pb.StartMockServerRequest>;
    requestDeserialize: grpc.deserialize<plugin_pb.StartMockServerRequest>;
    responseSerialize: grpc.serialize<plugin_pb.StartMockServerResponse>;
    responseDeserialize: grpc.deserialize<plugin_pb.StartMockServerResponse>;
}
interface IPactPluginService_IShutdownMockServer extends grpc.MethodDefinition<plugin_pb.ShutdownMockServerRequest, plugin_pb.ShutdownMockServerResponse> {
    path: "/io.pact.plugin.PactPlugin/ShutdownMockServer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plugin_pb.ShutdownMockServerRequest>;
    requestDeserialize: grpc.deserialize<plugin_pb.ShutdownMockServerRequest>;
    responseSerialize: grpc.serialize<plugin_pb.ShutdownMockServerResponse>;
    responseDeserialize: grpc.deserialize<plugin_pb.ShutdownMockServerResponse>;
}
interface IPactPluginService_IGetMockServerResults extends grpc.MethodDefinition<plugin_pb.MockServerRequest, plugin_pb.MockServerResults> {
    path: "/io.pact.plugin.PactPlugin/GetMockServerResults";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plugin_pb.MockServerRequest>;
    requestDeserialize: grpc.deserialize<plugin_pb.MockServerRequest>;
    responseSerialize: grpc.serialize<plugin_pb.MockServerResults>;
    responseDeserialize: grpc.deserialize<plugin_pb.MockServerResults>;
}
interface IPactPluginService_IPrepareInteractionForVerification extends grpc.MethodDefinition<plugin_pb.VerificationPreparationRequest, plugin_pb.VerificationPreparationResponse> {
    path: "/io.pact.plugin.PactPlugin/PrepareInteractionForVerification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plugin_pb.VerificationPreparationRequest>;
    requestDeserialize: grpc.deserialize<plugin_pb.VerificationPreparationRequest>;
    responseSerialize: grpc.serialize<plugin_pb.VerificationPreparationResponse>;
    responseDeserialize: grpc.deserialize<plugin_pb.VerificationPreparationResponse>;
}
interface IPactPluginService_IVerifyInteraction extends grpc.MethodDefinition<plugin_pb.VerifyInteractionRequest, plugin_pb.VerifyInteractionResponse> {
    path: "/io.pact.plugin.PactPlugin/VerifyInteraction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plugin_pb.VerifyInteractionRequest>;
    requestDeserialize: grpc.deserialize<plugin_pb.VerifyInteractionRequest>;
    responseSerialize: grpc.serialize<plugin_pb.VerifyInteractionResponse>;
    responseDeserialize: grpc.deserialize<plugin_pb.VerifyInteractionResponse>;
}

export const PactPluginService: IPactPluginService;

export interface IPactPluginServer {
    initPlugin: grpc.handleUnaryCall<plugin_pb.InitPluginRequest, plugin_pb.InitPluginResponse>;
    updateCatalogue: grpc.handleUnaryCall<plugin_pb.Catalogue, google_protobuf_empty_pb.Empty>;
    compareContents: grpc.handleUnaryCall<plugin_pb.CompareContentsRequest, plugin_pb.CompareContentsResponse>;
    configureInteraction: grpc.handleUnaryCall<plugin_pb.ConfigureInteractionRequest, plugin_pb.ConfigureInteractionResponse>;
    generateContent: grpc.handleUnaryCall<plugin_pb.GenerateContentRequest, plugin_pb.GenerateContentResponse>;
    startMockServer: grpc.handleUnaryCall<plugin_pb.StartMockServerRequest, plugin_pb.StartMockServerResponse>;
    shutdownMockServer: grpc.handleUnaryCall<plugin_pb.ShutdownMockServerRequest, plugin_pb.ShutdownMockServerResponse>;
    getMockServerResults: grpc.handleUnaryCall<plugin_pb.MockServerRequest, plugin_pb.MockServerResults>;
    prepareInteractionForVerification: grpc.handleUnaryCall<plugin_pb.VerificationPreparationRequest, plugin_pb.VerificationPreparationResponse>;
    verifyInteraction: grpc.handleUnaryCall<plugin_pb.VerifyInteractionRequest, plugin_pb.VerifyInteractionResponse>;
}

export interface IPactPluginClient {
    initPlugin(request: plugin_pb.InitPluginRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.InitPluginResponse) => void): grpc.ClientUnaryCall;
    initPlugin(request: plugin_pb.InitPluginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.InitPluginResponse) => void): grpc.ClientUnaryCall;
    initPlugin(request: plugin_pb.InitPluginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.InitPluginResponse) => void): grpc.ClientUnaryCall;
    updateCatalogue(request: plugin_pb.Catalogue, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateCatalogue(request: plugin_pb.Catalogue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateCatalogue(request: plugin_pb.Catalogue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    compareContents(request: plugin_pb.CompareContentsRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.CompareContentsResponse) => void): grpc.ClientUnaryCall;
    compareContents(request: plugin_pb.CompareContentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.CompareContentsResponse) => void): grpc.ClientUnaryCall;
    compareContents(request: plugin_pb.CompareContentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.CompareContentsResponse) => void): grpc.ClientUnaryCall;
    configureInteraction(request: plugin_pb.ConfigureInteractionRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.ConfigureInteractionResponse) => void): grpc.ClientUnaryCall;
    configureInteraction(request: plugin_pb.ConfigureInteractionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.ConfigureInteractionResponse) => void): grpc.ClientUnaryCall;
    configureInteraction(request: plugin_pb.ConfigureInteractionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.ConfigureInteractionResponse) => void): grpc.ClientUnaryCall;
    generateContent(request: plugin_pb.GenerateContentRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.GenerateContentResponse) => void): grpc.ClientUnaryCall;
    generateContent(request: plugin_pb.GenerateContentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.GenerateContentResponse) => void): grpc.ClientUnaryCall;
    generateContent(request: plugin_pb.GenerateContentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.GenerateContentResponse) => void): grpc.ClientUnaryCall;
    startMockServer(request: plugin_pb.StartMockServerRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.StartMockServerResponse) => void): grpc.ClientUnaryCall;
    startMockServer(request: plugin_pb.StartMockServerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.StartMockServerResponse) => void): grpc.ClientUnaryCall;
    startMockServer(request: plugin_pb.StartMockServerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.StartMockServerResponse) => void): grpc.ClientUnaryCall;
    shutdownMockServer(request: plugin_pb.ShutdownMockServerRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.ShutdownMockServerResponse) => void): grpc.ClientUnaryCall;
    shutdownMockServer(request: plugin_pb.ShutdownMockServerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.ShutdownMockServerResponse) => void): grpc.ClientUnaryCall;
    shutdownMockServer(request: plugin_pb.ShutdownMockServerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.ShutdownMockServerResponse) => void): grpc.ClientUnaryCall;
    getMockServerResults(request: plugin_pb.MockServerRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.MockServerResults) => void): grpc.ClientUnaryCall;
    getMockServerResults(request: plugin_pb.MockServerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.MockServerResults) => void): grpc.ClientUnaryCall;
    getMockServerResults(request: plugin_pb.MockServerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.MockServerResults) => void): grpc.ClientUnaryCall;
    prepareInteractionForVerification(request: plugin_pb.VerificationPreparationRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.VerificationPreparationResponse) => void): grpc.ClientUnaryCall;
    prepareInteractionForVerification(request: plugin_pb.VerificationPreparationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.VerificationPreparationResponse) => void): grpc.ClientUnaryCall;
    prepareInteractionForVerification(request: plugin_pb.VerificationPreparationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.VerificationPreparationResponse) => void): grpc.ClientUnaryCall;
    verifyInteraction(request: plugin_pb.VerifyInteractionRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.VerifyInteractionResponse) => void): grpc.ClientUnaryCall;
    verifyInteraction(request: plugin_pb.VerifyInteractionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.VerifyInteractionResponse) => void): grpc.ClientUnaryCall;
    verifyInteraction(request: plugin_pb.VerifyInteractionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.VerifyInteractionResponse) => void): grpc.ClientUnaryCall;
}

export class PactPluginClient extends grpc.Client implements IPactPluginClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public initPlugin(request: plugin_pb.InitPluginRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.InitPluginResponse) => void): grpc.ClientUnaryCall;
    public initPlugin(request: plugin_pb.InitPluginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.InitPluginResponse) => void): grpc.ClientUnaryCall;
    public initPlugin(request: plugin_pb.InitPluginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.InitPluginResponse) => void): grpc.ClientUnaryCall;
    public updateCatalogue(request: plugin_pb.Catalogue, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateCatalogue(request: plugin_pb.Catalogue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateCatalogue(request: plugin_pb.Catalogue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public compareContents(request: plugin_pb.CompareContentsRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.CompareContentsResponse) => void): grpc.ClientUnaryCall;
    public compareContents(request: plugin_pb.CompareContentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.CompareContentsResponse) => void): grpc.ClientUnaryCall;
    public compareContents(request: plugin_pb.CompareContentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.CompareContentsResponse) => void): grpc.ClientUnaryCall;
    public configureInteraction(request: plugin_pb.ConfigureInteractionRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.ConfigureInteractionResponse) => void): grpc.ClientUnaryCall;
    public configureInteraction(request: plugin_pb.ConfigureInteractionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.ConfigureInteractionResponse) => void): grpc.ClientUnaryCall;
    public configureInteraction(request: plugin_pb.ConfigureInteractionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.ConfigureInteractionResponse) => void): grpc.ClientUnaryCall;
    public generateContent(request: plugin_pb.GenerateContentRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.GenerateContentResponse) => void): grpc.ClientUnaryCall;
    public generateContent(request: plugin_pb.GenerateContentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.GenerateContentResponse) => void): grpc.ClientUnaryCall;
    public generateContent(request: plugin_pb.GenerateContentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.GenerateContentResponse) => void): grpc.ClientUnaryCall;
    public startMockServer(request: plugin_pb.StartMockServerRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.StartMockServerResponse) => void): grpc.ClientUnaryCall;
    public startMockServer(request: plugin_pb.StartMockServerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.StartMockServerResponse) => void): grpc.ClientUnaryCall;
    public startMockServer(request: plugin_pb.StartMockServerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.StartMockServerResponse) => void): grpc.ClientUnaryCall;
    public shutdownMockServer(request: plugin_pb.ShutdownMockServerRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.ShutdownMockServerResponse) => void): grpc.ClientUnaryCall;
    public shutdownMockServer(request: plugin_pb.ShutdownMockServerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.ShutdownMockServerResponse) => void): grpc.ClientUnaryCall;
    public shutdownMockServer(request: plugin_pb.ShutdownMockServerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.ShutdownMockServerResponse) => void): grpc.ClientUnaryCall;
    public getMockServerResults(request: plugin_pb.MockServerRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.MockServerResults) => void): grpc.ClientUnaryCall;
    public getMockServerResults(request: plugin_pb.MockServerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.MockServerResults) => void): grpc.ClientUnaryCall;
    public getMockServerResults(request: plugin_pb.MockServerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.MockServerResults) => void): grpc.ClientUnaryCall;
    public prepareInteractionForVerification(request: plugin_pb.VerificationPreparationRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.VerificationPreparationResponse) => void): grpc.ClientUnaryCall;
    public prepareInteractionForVerification(request: plugin_pb.VerificationPreparationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.VerificationPreparationResponse) => void): grpc.ClientUnaryCall;
    public prepareInteractionForVerification(request: plugin_pb.VerificationPreparationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.VerificationPreparationResponse) => void): grpc.ClientUnaryCall;
    public verifyInteraction(request: plugin_pb.VerifyInteractionRequest, callback: (error: grpc.ServiceError | null, response: plugin_pb.VerifyInteractionResponse) => void): grpc.ClientUnaryCall;
    public verifyInteraction(request: plugin_pb.VerifyInteractionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plugin_pb.VerifyInteractionResponse) => void): grpc.ClientUnaryCall;
    public verifyInteraction(request: plugin_pb.VerifyInteractionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plugin_pb.VerifyInteractionResponse) => void): grpc.ClientUnaryCall;
}
