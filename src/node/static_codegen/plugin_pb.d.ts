// package: io.pact.plugin
// file: plugin.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class InitPluginRequest extends jspb.Message { 
    getImplementation(): string;
    setImplementation(value: string): InitPluginRequest;
    getVersion(): string;
    setVersion(value: string): InitPluginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitPluginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InitPluginRequest): InitPluginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitPluginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitPluginRequest;
    static deserializeBinaryFromReader(message: InitPluginRequest, reader: jspb.BinaryReader): InitPluginRequest;
}

export namespace InitPluginRequest {
    export type AsObject = {
        implementation: string,
        version: string,
    }
}

export class CatalogueEntry extends jspb.Message { 
    getType(): CatalogueEntry.EntryType;
    setType(value: CatalogueEntry.EntryType): CatalogueEntry;
    getKey(): string;
    setKey(value: string): CatalogueEntry;

    setValuesMap(values:jspb.Map<string, string>);
    getValuesMap(): jspb.Map<string, string>;
    clearValuesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CatalogueEntry.AsObject;
    static toObject(includeInstance: boolean, msg: CatalogueEntry): CatalogueEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CatalogueEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CatalogueEntry;
    static deserializeBinaryFromReader(message: CatalogueEntry, reader: jspb.BinaryReader): CatalogueEntry;
}

export namespace CatalogueEntry {
    export type AsObject = {
        type: CatalogueEntry.EntryType,
        key: string,

        valuesMap: Array<[string, string]>,
    }

    export enum EntryType {
    CONTENT_MATCHER = 0,
    CONTENT_GENERATOR = 1,
    TRANSPORT = 2,
    MATCHER = 3,
    INTERACTION = 4,
    }

}

export class InitPluginResponse extends jspb.Message { 
    clearCatalogueList(): void;
    getCatalogueList(): Array<CatalogueEntry>;
    setCatalogueList(value: Array<CatalogueEntry>): InitPluginResponse;
    addCatalogue(value?: CatalogueEntry, index?: number): CatalogueEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitPluginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InitPluginResponse): InitPluginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitPluginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitPluginResponse;
    static deserializeBinaryFromReader(message: InitPluginResponse, reader: jspb.BinaryReader): InitPluginResponse;
}

export namespace InitPluginResponse {
    export type AsObject = {
        catalogueList: Array<CatalogueEntry.AsObject>,
    }
}

export class Catalogue extends jspb.Message { 
    clearCatalogueList(): void;
    getCatalogueList(): Array<CatalogueEntry>;
    setCatalogueList(value: Array<CatalogueEntry>): Catalogue;
    addCatalogue(value?: CatalogueEntry, index?: number): CatalogueEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Catalogue.AsObject;
    static toObject(includeInstance: boolean, msg: Catalogue): Catalogue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Catalogue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Catalogue;
    static deserializeBinaryFromReader(message: Catalogue, reader: jspb.BinaryReader): Catalogue;
}

export namespace Catalogue {
    export type AsObject = {
        catalogueList: Array<CatalogueEntry.AsObject>,
    }
}

export class Body extends jspb.Message { 
    getContenttype(): string;
    setContenttype(value: string): Body;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): google_protobuf_wrappers_pb.BytesValue | undefined;
    setContent(value?: google_protobuf_wrappers_pb.BytesValue): Body;
    getContenttypehint(): Body.ContentTypeHint;
    setContenttypehint(value: Body.ContentTypeHint): Body;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Body.AsObject;
    static toObject(includeInstance: boolean, msg: Body): Body.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Body, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Body;
    static deserializeBinaryFromReader(message: Body, reader: jspb.BinaryReader): Body;
}

export namespace Body {
    export type AsObject = {
        contenttype: string,
        content?: google_protobuf_wrappers_pb.BytesValue.AsObject,
        contenttypehint: Body.ContentTypeHint,
    }

    export enum ContentTypeHint {
    DEFAULT = 0,
    TEXT = 1,
    BINARY = 2,
    }

}

export class CompareContentsRequest extends jspb.Message { 

    hasExpected(): boolean;
    clearExpected(): void;
    getExpected(): Body | undefined;
    setExpected(value?: Body): CompareContentsRequest;

    hasActual(): boolean;
    clearActual(): void;
    getActual(): Body | undefined;
    setActual(value?: Body): CompareContentsRequest;
    getAllowUnexpectedKeys(): boolean;
    setAllowUnexpectedKeys(value: boolean): CompareContentsRequest;

    getRulesMap(): jspb.Map<string, MatchingRules>;
    clearRulesMap(): void;

    hasPluginconfiguration(): boolean;
    clearPluginconfiguration(): void;
    getPluginconfiguration(): PluginConfiguration | undefined;
    setPluginconfiguration(value?: PluginConfiguration): CompareContentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompareContentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CompareContentsRequest): CompareContentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompareContentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompareContentsRequest;
    static deserializeBinaryFromReader(message: CompareContentsRequest, reader: jspb.BinaryReader): CompareContentsRequest;
}

export namespace CompareContentsRequest {
    export type AsObject = {
        expected?: Body.AsObject,
        actual?: Body.AsObject,
        allowUnexpectedKeys: boolean,

        rulesMap: Array<[string, MatchingRules.AsObject]>,
        pluginconfiguration?: PluginConfiguration.AsObject,
    }
}

export class ContentTypeMismatch extends jspb.Message { 
    getExpected(): string;
    setExpected(value: string): ContentTypeMismatch;
    getActual(): string;
    setActual(value: string): ContentTypeMismatch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContentTypeMismatch.AsObject;
    static toObject(includeInstance: boolean, msg: ContentTypeMismatch): ContentTypeMismatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContentTypeMismatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContentTypeMismatch;
    static deserializeBinaryFromReader(message: ContentTypeMismatch, reader: jspb.BinaryReader): ContentTypeMismatch;
}

export namespace ContentTypeMismatch {
    export type AsObject = {
        expected: string,
        actual: string,
    }
}

export class ContentMismatch extends jspb.Message { 

    hasExpected(): boolean;
    clearExpected(): void;
    getExpected(): google_protobuf_wrappers_pb.BytesValue | undefined;
    setExpected(value?: google_protobuf_wrappers_pb.BytesValue): ContentMismatch;

    hasActual(): boolean;
    clearActual(): void;
    getActual(): google_protobuf_wrappers_pb.BytesValue | undefined;
    setActual(value?: google_protobuf_wrappers_pb.BytesValue): ContentMismatch;
    getMismatch(): string;
    setMismatch(value: string): ContentMismatch;
    getPath(): string;
    setPath(value: string): ContentMismatch;
    getDiff(): string;
    setDiff(value: string): ContentMismatch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContentMismatch.AsObject;
    static toObject(includeInstance: boolean, msg: ContentMismatch): ContentMismatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContentMismatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContentMismatch;
    static deserializeBinaryFromReader(message: ContentMismatch, reader: jspb.BinaryReader): ContentMismatch;
}

export namespace ContentMismatch {
    export type AsObject = {
        expected?: google_protobuf_wrappers_pb.BytesValue.AsObject,
        actual?: google_protobuf_wrappers_pb.BytesValue.AsObject,
        mismatch: string,
        path: string,
        diff: string,
    }
}

export class ContentMismatches extends jspb.Message { 
    clearMismatchesList(): void;
    getMismatchesList(): Array<ContentMismatch>;
    setMismatchesList(value: Array<ContentMismatch>): ContentMismatches;
    addMismatches(value?: ContentMismatch, index?: number): ContentMismatch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContentMismatches.AsObject;
    static toObject(includeInstance: boolean, msg: ContentMismatches): ContentMismatches.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContentMismatches, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContentMismatches;
    static deserializeBinaryFromReader(message: ContentMismatches, reader: jspb.BinaryReader): ContentMismatches;
}

export namespace ContentMismatches {
    export type AsObject = {
        mismatchesList: Array<ContentMismatch.AsObject>,
    }
}

export class CompareContentsResponse extends jspb.Message { 
    getError(): string;
    setError(value: string): CompareContentsResponse;

    hasTypemismatch(): boolean;
    clearTypemismatch(): void;
    getTypemismatch(): ContentTypeMismatch | undefined;
    setTypemismatch(value?: ContentTypeMismatch): CompareContentsResponse;

    getResultsMap(): jspb.Map<string, ContentMismatches>;
    clearResultsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompareContentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CompareContentsResponse): CompareContentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompareContentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompareContentsResponse;
    static deserializeBinaryFromReader(message: CompareContentsResponse, reader: jspb.BinaryReader): CompareContentsResponse;
}

export namespace CompareContentsResponse {
    export type AsObject = {
        error: string,
        typemismatch?: ContentTypeMismatch.AsObject,

        resultsMap: Array<[string, ContentMismatches.AsObject]>,
    }
}

export class ConfigureInteractionRequest extends jspb.Message { 
    getContenttype(): string;
    setContenttype(value: string): ConfigureInteractionRequest;

    hasContentsconfig(): boolean;
    clearContentsconfig(): void;
    getContentsconfig(): google_protobuf_struct_pb.Struct | undefined;
    setContentsconfig(value?: google_protobuf_struct_pb.Struct): ConfigureInteractionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigureInteractionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigureInteractionRequest): ConfigureInteractionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigureInteractionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigureInteractionRequest;
    static deserializeBinaryFromReader(message: ConfigureInteractionRequest, reader: jspb.BinaryReader): ConfigureInteractionRequest;
}

export namespace ConfigureInteractionRequest {
    export type AsObject = {
        contenttype: string,
        contentsconfig?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class MatchingRule extends jspb.Message { 
    getType(): string;
    setType(value: string): MatchingRule;

    hasValues(): boolean;
    clearValues(): void;
    getValues(): google_protobuf_struct_pb.Struct | undefined;
    setValues(value?: google_protobuf_struct_pb.Struct): MatchingRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MatchingRule.AsObject;
    static toObject(includeInstance: boolean, msg: MatchingRule): MatchingRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MatchingRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MatchingRule;
    static deserializeBinaryFromReader(message: MatchingRule, reader: jspb.BinaryReader): MatchingRule;
}

export namespace MatchingRule {
    export type AsObject = {
        type: string,
        values?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class MatchingRules extends jspb.Message { 
    clearRuleList(): void;
    getRuleList(): Array<MatchingRule>;
    setRuleList(value: Array<MatchingRule>): MatchingRules;
    addRule(value?: MatchingRule, index?: number): MatchingRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MatchingRules.AsObject;
    static toObject(includeInstance: boolean, msg: MatchingRules): MatchingRules.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MatchingRules, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MatchingRules;
    static deserializeBinaryFromReader(message: MatchingRules, reader: jspb.BinaryReader): MatchingRules;
}

export namespace MatchingRules {
    export type AsObject = {
        ruleList: Array<MatchingRule.AsObject>,
    }
}

export class Generator extends jspb.Message { 
    getType(): string;
    setType(value: string): Generator;

    hasValues(): boolean;
    clearValues(): void;
    getValues(): google_protobuf_struct_pb.Struct | undefined;
    setValues(value?: google_protobuf_struct_pb.Struct): Generator;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Generator.AsObject;
    static toObject(includeInstance: boolean, msg: Generator): Generator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Generator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Generator;
    static deserializeBinaryFromReader(message: Generator, reader: jspb.BinaryReader): Generator;
}

export namespace Generator {
    export type AsObject = {
        type: string,
        values?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class PluginConfiguration extends jspb.Message { 

    hasInteractionconfiguration(): boolean;
    clearInteractionconfiguration(): void;
    getInteractionconfiguration(): google_protobuf_struct_pb.Struct | undefined;
    setInteractionconfiguration(value?: google_protobuf_struct_pb.Struct): PluginConfiguration;

    hasPactconfiguration(): boolean;
    clearPactconfiguration(): void;
    getPactconfiguration(): google_protobuf_struct_pb.Struct | undefined;
    setPactconfiguration(value?: google_protobuf_struct_pb.Struct): PluginConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PluginConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: PluginConfiguration): PluginConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PluginConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PluginConfiguration;
    static deserializeBinaryFromReader(message: PluginConfiguration, reader: jspb.BinaryReader): PluginConfiguration;
}

export namespace PluginConfiguration {
    export type AsObject = {
        interactionconfiguration?: google_protobuf_struct_pb.Struct.AsObject,
        pactconfiguration?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class InteractionResponse extends jspb.Message { 

    hasContents(): boolean;
    clearContents(): void;
    getContents(): Body | undefined;
    setContents(value?: Body): InteractionResponse;

    getRulesMap(): jspb.Map<string, MatchingRules>;
    clearRulesMap(): void;

    getGeneratorsMap(): jspb.Map<string, Generator>;
    clearGeneratorsMap(): void;

    hasMessagemetadata(): boolean;
    clearMessagemetadata(): void;
    getMessagemetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMessagemetadata(value?: google_protobuf_struct_pb.Struct): InteractionResponse;

    hasPluginconfiguration(): boolean;
    clearPluginconfiguration(): void;
    getPluginconfiguration(): PluginConfiguration | undefined;
    setPluginconfiguration(value?: PluginConfiguration): InteractionResponse;
    getInteractionmarkup(): string;
    setInteractionmarkup(value: string): InteractionResponse;
    getInteractionmarkuptype(): InteractionResponse.MarkupType;
    setInteractionmarkuptype(value: InteractionResponse.MarkupType): InteractionResponse;
    getPartname(): string;
    setPartname(value: string): InteractionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InteractionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InteractionResponse): InteractionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InteractionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InteractionResponse;
    static deserializeBinaryFromReader(message: InteractionResponse, reader: jspb.BinaryReader): InteractionResponse;
}

export namespace InteractionResponse {
    export type AsObject = {
        contents?: Body.AsObject,

        rulesMap: Array<[string, MatchingRules.AsObject]>,

        generatorsMap: Array<[string, Generator.AsObject]>,
        messagemetadata?: google_protobuf_struct_pb.Struct.AsObject,
        pluginconfiguration?: PluginConfiguration.AsObject,
        interactionmarkup: string,
        interactionmarkuptype: InteractionResponse.MarkupType,
        partname: string,
    }

    export enum MarkupType {
    COMMON_MARK = 0,
    HTML = 1,
    }

}

export class ConfigureInteractionResponse extends jspb.Message { 
    getError(): string;
    setError(value: string): ConfigureInteractionResponse;
    clearInteractionList(): void;
    getInteractionList(): Array<InteractionResponse>;
    setInteractionList(value: Array<InteractionResponse>): ConfigureInteractionResponse;
    addInteraction(value?: InteractionResponse, index?: number): InteractionResponse;

    hasPluginconfiguration(): boolean;
    clearPluginconfiguration(): void;
    getPluginconfiguration(): PluginConfiguration | undefined;
    setPluginconfiguration(value?: PluginConfiguration): ConfigureInteractionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigureInteractionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigureInteractionResponse): ConfigureInteractionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigureInteractionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigureInteractionResponse;
    static deserializeBinaryFromReader(message: ConfigureInteractionResponse, reader: jspb.BinaryReader): ConfigureInteractionResponse;
}

export namespace ConfigureInteractionResponse {
    export type AsObject = {
        error: string,
        interactionList: Array<InteractionResponse.AsObject>,
        pluginconfiguration?: PluginConfiguration.AsObject,
    }
}

export class GenerateContentRequest extends jspb.Message { 

    hasContents(): boolean;
    clearContents(): void;
    getContents(): Body | undefined;
    setContents(value?: Body): GenerateContentRequest;

    getGeneratorsMap(): jspb.Map<string, Generator>;
    clearGeneratorsMap(): void;

    hasPluginconfiguration(): boolean;
    clearPluginconfiguration(): void;
    getPluginconfiguration(): PluginConfiguration | undefined;
    setPluginconfiguration(value?: PluginConfiguration): GenerateContentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateContentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateContentRequest): GenerateContentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateContentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateContentRequest;
    static deserializeBinaryFromReader(message: GenerateContentRequest, reader: jspb.BinaryReader): GenerateContentRequest;
}

export namespace GenerateContentRequest {
    export type AsObject = {
        contents?: Body.AsObject,

        generatorsMap: Array<[string, Generator.AsObject]>,
        pluginconfiguration?: PluginConfiguration.AsObject,
    }
}

export class GenerateContentResponse extends jspb.Message { 

    hasContents(): boolean;
    clearContents(): void;
    getContents(): Body | undefined;
    setContents(value?: Body): GenerateContentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateContentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateContentResponse): GenerateContentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateContentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateContentResponse;
    static deserializeBinaryFromReader(message: GenerateContentResponse, reader: jspb.BinaryReader): GenerateContentResponse;
}

export namespace GenerateContentResponse {
    export type AsObject = {
        contents?: Body.AsObject,
    }
}

export class StartMockServerRequest extends jspb.Message { 
    getHostinterface(): string;
    setHostinterface(value: string): StartMockServerRequest;
    getPort(): number;
    setPort(value: number): StartMockServerRequest;
    getTls(): boolean;
    setTls(value: boolean): StartMockServerRequest;
    getPact(): string;
    setPact(value: string): StartMockServerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartMockServerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartMockServerRequest): StartMockServerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartMockServerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartMockServerRequest;
    static deserializeBinaryFromReader(message: StartMockServerRequest, reader: jspb.BinaryReader): StartMockServerRequest;
}

export namespace StartMockServerRequest {
    export type AsObject = {
        hostinterface: string,
        port: number,
        tls: boolean,
        pact: string,
    }
}

export class StartMockServerResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): string;
    setError(value: string): StartMockServerResponse;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): MockServerDetails | undefined;
    setDetails(value?: MockServerDetails): StartMockServerResponse;

    getResponseCase(): StartMockServerResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartMockServerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartMockServerResponse): StartMockServerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartMockServerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartMockServerResponse;
    static deserializeBinaryFromReader(message: StartMockServerResponse, reader: jspb.BinaryReader): StartMockServerResponse;
}

export namespace StartMockServerResponse {
    export type AsObject = {
        error: string,
        details?: MockServerDetails.AsObject,
    }

    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
        ERROR = 1,
        DETAILS = 2,
    }

}

export class MockServerDetails extends jspb.Message { 
    getKey(): string;
    setKey(value: string): MockServerDetails;
    getPort(): number;
    setPort(value: number): MockServerDetails;
    getAddress(): string;
    setAddress(value: string): MockServerDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MockServerDetails.AsObject;
    static toObject(includeInstance: boolean, msg: MockServerDetails): MockServerDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MockServerDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MockServerDetails;
    static deserializeBinaryFromReader(message: MockServerDetails, reader: jspb.BinaryReader): MockServerDetails;
}

export namespace MockServerDetails {
    export type AsObject = {
        key: string,
        port: number,
        address: string,
    }
}

export class ShutdownMockServerRequest extends jspb.Message { 
    getServerkey(): string;
    setServerkey(value: string): ShutdownMockServerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShutdownMockServerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ShutdownMockServerRequest): ShutdownMockServerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShutdownMockServerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShutdownMockServerRequest;
    static deserializeBinaryFromReader(message: ShutdownMockServerRequest, reader: jspb.BinaryReader): ShutdownMockServerRequest;
}

export namespace ShutdownMockServerRequest {
    export type AsObject = {
        serverkey: string,
    }
}

export class MockServerRequest extends jspb.Message { 
    getServerkey(): string;
    setServerkey(value: string): MockServerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MockServerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MockServerRequest): MockServerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MockServerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MockServerRequest;
    static deserializeBinaryFromReader(message: MockServerRequest, reader: jspb.BinaryReader): MockServerRequest;
}

export namespace MockServerRequest {
    export type AsObject = {
        serverkey: string,
    }
}

export class MockServerResult extends jspb.Message { 
    getPath(): string;
    setPath(value: string): MockServerResult;
    getError(): string;
    setError(value: string): MockServerResult;
    clearMismatchesList(): void;
    getMismatchesList(): Array<ContentMismatch>;
    setMismatchesList(value: Array<ContentMismatch>): MockServerResult;
    addMismatches(value?: ContentMismatch, index?: number): ContentMismatch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MockServerResult.AsObject;
    static toObject(includeInstance: boolean, msg: MockServerResult): MockServerResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MockServerResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MockServerResult;
    static deserializeBinaryFromReader(message: MockServerResult, reader: jspb.BinaryReader): MockServerResult;
}

export namespace MockServerResult {
    export type AsObject = {
        path: string,
        error: string,
        mismatchesList: Array<ContentMismatch.AsObject>,
    }
}

export class ShutdownMockServerResponse extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): ShutdownMockServerResponse;
    clearResultsList(): void;
    getResultsList(): Array<MockServerResult>;
    setResultsList(value: Array<MockServerResult>): ShutdownMockServerResponse;
    addResults(value?: MockServerResult, index?: number): MockServerResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShutdownMockServerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ShutdownMockServerResponse): ShutdownMockServerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShutdownMockServerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShutdownMockServerResponse;
    static deserializeBinaryFromReader(message: ShutdownMockServerResponse, reader: jspb.BinaryReader): ShutdownMockServerResponse;
}

export namespace ShutdownMockServerResponse {
    export type AsObject = {
        ok: boolean,
        resultsList: Array<MockServerResult.AsObject>,
    }
}

export class MockServerResults extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): MockServerResults;
    clearResultsList(): void;
    getResultsList(): Array<MockServerResult>;
    setResultsList(value: Array<MockServerResult>): MockServerResults;
    addResults(value?: MockServerResult, index?: number): MockServerResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MockServerResults.AsObject;
    static toObject(includeInstance: boolean, msg: MockServerResults): MockServerResults.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MockServerResults, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MockServerResults;
    static deserializeBinaryFromReader(message: MockServerResults, reader: jspb.BinaryReader): MockServerResults;
}

export namespace MockServerResults {
    export type AsObject = {
        ok: boolean,
        resultsList: Array<MockServerResult.AsObject>,
    }
}

export class VerificationPreparationRequest extends jspb.Message { 
    getPact(): string;
    setPact(value: string): VerificationPreparationRequest;
    getInteractionkey(): string;
    setInteractionkey(value: string): VerificationPreparationRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): google_protobuf_struct_pb.Struct | undefined;
    setConfig(value?: google_protobuf_struct_pb.Struct): VerificationPreparationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerificationPreparationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VerificationPreparationRequest): VerificationPreparationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerificationPreparationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerificationPreparationRequest;
    static deserializeBinaryFromReader(message: VerificationPreparationRequest, reader: jspb.BinaryReader): VerificationPreparationRequest;
}

export namespace VerificationPreparationRequest {
    export type AsObject = {
        pact: string,
        interactionkey: string,
        config?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class MetadataValue extends jspb.Message { 

    hasNonbinaryvalue(): boolean;
    clearNonbinaryvalue(): void;
    getNonbinaryvalue(): google_protobuf_struct_pb.Value | undefined;
    setNonbinaryvalue(value?: google_protobuf_struct_pb.Value): MetadataValue;

    hasBinaryvalue(): boolean;
    clearBinaryvalue(): void;
    getBinaryvalue(): Uint8Array | string;
    getBinaryvalue_asU8(): Uint8Array;
    getBinaryvalue_asB64(): string;
    setBinaryvalue(value: Uint8Array | string): MetadataValue;

    getValueCase(): MetadataValue.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetadataValue.AsObject;
    static toObject(includeInstance: boolean, msg: MetadataValue): MetadataValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetadataValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetadataValue;
    static deserializeBinaryFromReader(message: MetadataValue, reader: jspb.BinaryReader): MetadataValue;
}

export namespace MetadataValue {
    export type AsObject = {
        nonbinaryvalue?: google_protobuf_struct_pb.Value.AsObject,
        binaryvalue: Uint8Array | string,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        NONBINARYVALUE = 1,
        BINARYVALUE = 2,
    }

}

export class InteractionData extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): Body | undefined;
    setBody(value?: Body): InteractionData;

    getMetadataMap(): jspb.Map<string, MetadataValue>;
    clearMetadataMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InteractionData.AsObject;
    static toObject(includeInstance: boolean, msg: InteractionData): InteractionData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InteractionData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InteractionData;
    static deserializeBinaryFromReader(message: InteractionData, reader: jspb.BinaryReader): InteractionData;
}

export namespace InteractionData {
    export type AsObject = {
        body?: Body.AsObject,

        metadataMap: Array<[string, MetadataValue.AsObject]>,
    }
}

export class VerificationPreparationResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): string;
    setError(value: string): VerificationPreparationResponse;

    hasInteractiondata(): boolean;
    clearInteractiondata(): void;
    getInteractiondata(): InteractionData | undefined;
    setInteractiondata(value?: InteractionData): VerificationPreparationResponse;

    getResponseCase(): VerificationPreparationResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerificationPreparationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VerificationPreparationResponse): VerificationPreparationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerificationPreparationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerificationPreparationResponse;
    static deserializeBinaryFromReader(message: VerificationPreparationResponse, reader: jspb.BinaryReader): VerificationPreparationResponse;
}

export namespace VerificationPreparationResponse {
    export type AsObject = {
        error: string,
        interactiondata?: InteractionData.AsObject,
    }

    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
        ERROR = 1,
        INTERACTIONDATA = 2,
    }

}

export class VerifyInteractionRequest extends jspb.Message { 

    hasInteractiondata(): boolean;
    clearInteractiondata(): void;
    getInteractiondata(): InteractionData | undefined;
    setInteractiondata(value?: InteractionData): VerifyInteractionRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): google_protobuf_struct_pb.Struct | undefined;
    setConfig(value?: google_protobuf_struct_pb.Struct): VerifyInteractionRequest;
    getPact(): string;
    setPact(value: string): VerifyInteractionRequest;
    getInteractionkey(): string;
    setInteractionkey(value: string): VerifyInteractionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyInteractionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyInteractionRequest): VerifyInteractionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyInteractionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyInteractionRequest;
    static deserializeBinaryFromReader(message: VerifyInteractionRequest, reader: jspb.BinaryReader): VerifyInteractionRequest;
}

export namespace VerifyInteractionRequest {
    export type AsObject = {
        interactiondata?: InteractionData.AsObject,
        config?: google_protobuf_struct_pb.Struct.AsObject,
        pact: string,
        interactionkey: string,
    }
}

export class VerificationResultItem extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): string;
    setError(value: string): VerificationResultItem;

    hasMismatch(): boolean;
    clearMismatch(): void;
    getMismatch(): ContentMismatch | undefined;
    setMismatch(value?: ContentMismatch): VerificationResultItem;

    getResultCase(): VerificationResultItem.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerificationResultItem.AsObject;
    static toObject(includeInstance: boolean, msg: VerificationResultItem): VerificationResultItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerificationResultItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerificationResultItem;
    static deserializeBinaryFromReader(message: VerificationResultItem, reader: jspb.BinaryReader): VerificationResultItem;
}

export namespace VerificationResultItem {
    export type AsObject = {
        error: string,
        mismatch?: ContentMismatch.AsObject,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
        ERROR = 1,
        MISMATCH = 2,
    }

}

export class VerificationResult extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): VerificationResult;

    hasResponsedata(): boolean;
    clearResponsedata(): void;
    getResponsedata(): InteractionData | undefined;
    setResponsedata(value?: InteractionData): VerificationResult;
    clearMismatchesList(): void;
    getMismatchesList(): Array<VerificationResultItem>;
    setMismatchesList(value: Array<VerificationResultItem>): VerificationResult;
    addMismatches(value?: VerificationResultItem, index?: number): VerificationResultItem;
    clearOutputList(): void;
    getOutputList(): Array<string>;
    setOutputList(value: Array<string>): VerificationResult;
    addOutput(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerificationResult.AsObject;
    static toObject(includeInstance: boolean, msg: VerificationResult): VerificationResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerificationResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerificationResult;
    static deserializeBinaryFromReader(message: VerificationResult, reader: jspb.BinaryReader): VerificationResult;
}

export namespace VerificationResult {
    export type AsObject = {
        success: boolean,
        responsedata?: InteractionData.AsObject,
        mismatchesList: Array<VerificationResultItem.AsObject>,
        outputList: Array<string>,
    }
}

export class VerifyInteractionResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): string;
    setError(value: string): VerifyInteractionResponse;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): VerificationResult | undefined;
    setResult(value?: VerificationResult): VerifyInteractionResponse;

    getResponseCase(): VerifyInteractionResponse.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyInteractionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyInteractionResponse): VerifyInteractionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyInteractionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyInteractionResponse;
    static deserializeBinaryFromReader(message: VerifyInteractionResponse, reader: jspb.BinaryReader): VerifyInteractionResponse;
}

export namespace VerifyInteractionResponse {
    export type AsObject = {
        error: string,
        result?: VerificationResult.AsObject,
    }

    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
        ERROR = 1,
        RESULT = 2,
    }

}
