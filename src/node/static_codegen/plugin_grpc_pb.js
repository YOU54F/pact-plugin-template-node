// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Proto file for Pact plugin interface V1
//
'use strict';
var grpc = require('@grpc/grpc-js');
var plugin_pb = require('./plugin_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_Catalogue(arg) {
  if (!(arg instanceof plugin_pb.Catalogue)) {
    throw new Error('Expected argument of type io.pact.plugin.Catalogue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_Catalogue(buffer_arg) {
  return plugin_pb.Catalogue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_CompareContentsRequest(arg) {
  if (!(arg instanceof plugin_pb.CompareContentsRequest)) {
    throw new Error('Expected argument of type io.pact.plugin.CompareContentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_CompareContentsRequest(buffer_arg) {
  return plugin_pb.CompareContentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_CompareContentsResponse(arg) {
  if (!(arg instanceof plugin_pb.CompareContentsResponse)) {
    throw new Error('Expected argument of type io.pact.plugin.CompareContentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_CompareContentsResponse(buffer_arg) {
  return plugin_pb.CompareContentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_ConfigureInteractionRequest(arg) {
  if (!(arg instanceof plugin_pb.ConfigureInteractionRequest)) {
    throw new Error('Expected argument of type io.pact.plugin.ConfigureInteractionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_ConfigureInteractionRequest(buffer_arg) {
  return plugin_pb.ConfigureInteractionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_ConfigureInteractionResponse(arg) {
  if (!(arg instanceof plugin_pb.ConfigureInteractionResponse)) {
    throw new Error('Expected argument of type io.pact.plugin.ConfigureInteractionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_ConfigureInteractionResponse(buffer_arg) {
  return plugin_pb.ConfigureInteractionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_GenerateContentRequest(arg) {
  if (!(arg instanceof plugin_pb.GenerateContentRequest)) {
    throw new Error('Expected argument of type io.pact.plugin.GenerateContentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_GenerateContentRequest(buffer_arg) {
  return plugin_pb.GenerateContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_GenerateContentResponse(arg) {
  if (!(arg instanceof plugin_pb.GenerateContentResponse)) {
    throw new Error('Expected argument of type io.pact.plugin.GenerateContentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_GenerateContentResponse(buffer_arg) {
  return plugin_pb.GenerateContentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_InitPluginRequest(arg) {
  if (!(arg instanceof plugin_pb.InitPluginRequest)) {
    throw new Error('Expected argument of type io.pact.plugin.InitPluginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_InitPluginRequest(buffer_arg) {
  return plugin_pb.InitPluginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_InitPluginResponse(arg) {
  if (!(arg instanceof plugin_pb.InitPluginResponse)) {
    throw new Error('Expected argument of type io.pact.plugin.InitPluginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_InitPluginResponse(buffer_arg) {
  return plugin_pb.InitPluginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_MockServerRequest(arg) {
  if (!(arg instanceof plugin_pb.MockServerRequest)) {
    throw new Error('Expected argument of type io.pact.plugin.MockServerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_MockServerRequest(buffer_arg) {
  return plugin_pb.MockServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_MockServerResults(arg) {
  if (!(arg instanceof plugin_pb.MockServerResults)) {
    throw new Error('Expected argument of type io.pact.plugin.MockServerResults');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_MockServerResults(buffer_arg) {
  return plugin_pb.MockServerResults.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_ShutdownMockServerRequest(arg) {
  if (!(arg instanceof plugin_pb.ShutdownMockServerRequest)) {
    throw new Error('Expected argument of type io.pact.plugin.ShutdownMockServerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_ShutdownMockServerRequest(buffer_arg) {
  return plugin_pb.ShutdownMockServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_ShutdownMockServerResponse(arg) {
  if (!(arg instanceof plugin_pb.ShutdownMockServerResponse)) {
    throw new Error('Expected argument of type io.pact.plugin.ShutdownMockServerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_ShutdownMockServerResponse(buffer_arg) {
  return plugin_pb.ShutdownMockServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_StartMockServerRequest(arg) {
  if (!(arg instanceof plugin_pb.StartMockServerRequest)) {
    throw new Error('Expected argument of type io.pact.plugin.StartMockServerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_StartMockServerRequest(buffer_arg) {
  return plugin_pb.StartMockServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_StartMockServerResponse(arg) {
  if (!(arg instanceof plugin_pb.StartMockServerResponse)) {
    throw new Error('Expected argument of type io.pact.plugin.StartMockServerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_StartMockServerResponse(buffer_arg) {
  return plugin_pb.StartMockServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_VerificationPreparationRequest(arg) {
  if (!(arg instanceof plugin_pb.VerificationPreparationRequest)) {
    throw new Error('Expected argument of type io.pact.plugin.VerificationPreparationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_VerificationPreparationRequest(buffer_arg) {
  return plugin_pb.VerificationPreparationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_VerificationPreparationResponse(arg) {
  if (!(arg instanceof plugin_pb.VerificationPreparationResponse)) {
    throw new Error('Expected argument of type io.pact.plugin.VerificationPreparationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_VerificationPreparationResponse(buffer_arg) {
  return plugin_pb.VerificationPreparationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_VerifyInteractionRequest(arg) {
  if (!(arg instanceof plugin_pb.VerifyInteractionRequest)) {
    throw new Error('Expected argument of type io.pact.plugin.VerifyInteractionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_VerifyInteractionRequest(buffer_arg) {
  return plugin_pb.VerifyInteractionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_pact_plugin_VerifyInteractionResponse(arg) {
  if (!(arg instanceof plugin_pb.VerifyInteractionResponse)) {
    throw new Error('Expected argument of type io.pact.plugin.VerifyInteractionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_pact_plugin_VerifyInteractionResponse(buffer_arg) {
  return plugin_pb.VerifyInteractionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PactPluginService = exports.PactPluginService = {
  // Check that the plugin loaded OK. Returns the catalogue entries describing what the plugin provides
initPlugin: {
    path: '/io.pact.plugin.PactPlugin/InitPlugin',
    requestStream: false,
    responseStream: false,
    requestType: plugin_pb.InitPluginRequest,
    responseType: plugin_pb.InitPluginResponse,
    requestSerialize: serialize_io_pact_plugin_InitPluginRequest,
    requestDeserialize: deserialize_io_pact_plugin_InitPluginRequest,
    responseSerialize: serialize_io_pact_plugin_InitPluginResponse,
    responseDeserialize: deserialize_io_pact_plugin_InitPluginResponse,
  },
  // Updated catalogue. This will be sent when the core catalogue has been updated (probably by a plugin loading).
updateCatalogue: {
    path: '/io.pact.plugin.PactPlugin/UpdateCatalogue',
    requestStream: false,
    responseStream: false,
    requestType: plugin_pb.Catalogue,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_io_pact_plugin_Catalogue,
    requestDeserialize: deserialize_io_pact_plugin_Catalogue,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Request to perform a comparison of some contents (matching request)
compareContents: {
    path: '/io.pact.plugin.PactPlugin/CompareContents',
    requestStream: false,
    responseStream: false,
    requestType: plugin_pb.CompareContentsRequest,
    responseType: plugin_pb.CompareContentsResponse,
    requestSerialize: serialize_io_pact_plugin_CompareContentsRequest,
    requestDeserialize: deserialize_io_pact_plugin_CompareContentsRequest,
    responseSerialize: serialize_io_pact_plugin_CompareContentsResponse,
    responseDeserialize: deserialize_io_pact_plugin_CompareContentsResponse,
  },
  // Request to configure/setup the interaction for later verification. Data returned will be persisted in the pact file.
configureInteraction: {
    path: '/io.pact.plugin.PactPlugin/ConfigureInteraction',
    requestStream: false,
    responseStream: false,
    requestType: plugin_pb.ConfigureInteractionRequest,
    responseType: plugin_pb.ConfigureInteractionResponse,
    requestSerialize: serialize_io_pact_plugin_ConfigureInteractionRequest,
    requestDeserialize: deserialize_io_pact_plugin_ConfigureInteractionRequest,
    responseSerialize: serialize_io_pact_plugin_ConfigureInteractionResponse,
    responseDeserialize: deserialize_io_pact_plugin_ConfigureInteractionResponse,
  },
  // Request to generate the content using any defined generators
generateContent: {
    path: '/io.pact.plugin.PactPlugin/GenerateContent',
    requestStream: false,
    responseStream: false,
    requestType: plugin_pb.GenerateContentRequest,
    responseType: plugin_pb.GenerateContentResponse,
    requestSerialize: serialize_io_pact_plugin_GenerateContentRequest,
    requestDeserialize: deserialize_io_pact_plugin_GenerateContentRequest,
    responseSerialize: serialize_io_pact_plugin_GenerateContentResponse,
    responseDeserialize: deserialize_io_pact_plugin_GenerateContentResponse,
  },
  // Start a mock server
startMockServer: {
    path: '/io.pact.plugin.PactPlugin/StartMockServer',
    requestStream: false,
    responseStream: false,
    requestType: plugin_pb.StartMockServerRequest,
    responseType: plugin_pb.StartMockServerResponse,
    requestSerialize: serialize_io_pact_plugin_StartMockServerRequest,
    requestDeserialize: deserialize_io_pact_plugin_StartMockServerRequest,
    responseSerialize: serialize_io_pact_plugin_StartMockServerResponse,
    responseDeserialize: deserialize_io_pact_plugin_StartMockServerResponse,
  },
  // Shutdown a running mock server
// TODO: Replace the message types with MockServerRequest and MockServerResults in the next major version
shutdownMockServer: {
    path: '/io.pact.plugin.PactPlugin/ShutdownMockServer',
    requestStream: false,
    responseStream: false,
    requestType: plugin_pb.ShutdownMockServerRequest,
    responseType: plugin_pb.ShutdownMockServerResponse,
    requestSerialize: serialize_io_pact_plugin_ShutdownMockServerRequest,
    requestDeserialize: deserialize_io_pact_plugin_ShutdownMockServerRequest,
    responseSerialize: serialize_io_pact_plugin_ShutdownMockServerResponse,
    responseDeserialize: deserialize_io_pact_plugin_ShutdownMockServerResponse,
  },
  // Get the matching results from a running mock server
getMockServerResults: {
    path: '/io.pact.plugin.PactPlugin/GetMockServerResults',
    requestStream: false,
    responseStream: false,
    requestType: plugin_pb.MockServerRequest,
    responseType: plugin_pb.MockServerResults,
    requestSerialize: serialize_io_pact_plugin_MockServerRequest,
    requestDeserialize: deserialize_io_pact_plugin_MockServerRequest,
    responseSerialize: serialize_io_pact_plugin_MockServerResults,
    responseDeserialize: deserialize_io_pact_plugin_MockServerResults,
  },
  // Prepare an interaction for verification. This should return any data required to construct any request
// so that it can be amended before the verification is run
prepareInteractionForVerification: {
    path: '/io.pact.plugin.PactPlugin/PrepareInteractionForVerification',
    requestStream: false,
    responseStream: false,
    requestType: plugin_pb.VerificationPreparationRequest,
    responseType: plugin_pb.VerificationPreparationResponse,
    requestSerialize: serialize_io_pact_plugin_VerificationPreparationRequest,
    requestDeserialize: deserialize_io_pact_plugin_VerificationPreparationRequest,
    responseSerialize: serialize_io_pact_plugin_VerificationPreparationResponse,
    responseDeserialize: deserialize_io_pact_plugin_VerificationPreparationResponse,
  },
  // Execute the verification for the interaction.
verifyInteraction: {
    path: '/io.pact.plugin.PactPlugin/VerifyInteraction',
    requestStream: false,
    responseStream: false,
    requestType: plugin_pb.VerifyInteractionRequest,
    responseType: plugin_pb.VerifyInteractionResponse,
    requestSerialize: serialize_io_pact_plugin_VerifyInteractionRequest,
    requestDeserialize: deserialize_io_pact_plugin_VerifyInteractionRequest,
    responseSerialize: serialize_io_pact_plugin_VerifyInteractionResponse,
    responseDeserialize: deserialize_io_pact_plugin_VerifyInteractionResponse,
  },
};

exports.PactPluginClient = grpc.makeGenericClientConstructor(PactPluginService);
