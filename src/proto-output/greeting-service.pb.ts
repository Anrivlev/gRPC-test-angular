/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for HelloRequest
 */
export class HelloRequest implements GrpcMessage {
  static id = 'HelloRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new HelloRequest();
    HelloRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: HelloRequest) {
    _instance.name = _instance.name || '';
    _instance.hobbies = _instance.hobbies || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: HelloRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          (_instance.hobbies = _instance.hobbies || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    HelloRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: HelloRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.hobbies && _instance.hobbies.length) {
      _writer.writeRepeatedString(2, _instance.hobbies);
    }
  }

  private _name: string;
  private _hobbies: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of HelloRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<HelloRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.hobbies = (_value.hobbies || []).slice();
    HelloRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get hobbies(): string[] {
    return this._hobbies;
  }
  set hobbies(value: string[]) {
    this._hobbies = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    HelloRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): HelloRequest.AsObject {
    return {
      name: this.name,
      hobbies: (this.hobbies || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): HelloRequest.AsProtobufJSON {
    return {
      name: this.name,
      hobbies: (this.hobbies || []).slice()
    };
  }
}
export module HelloRequest {
  /**
   * Standard JavaScript object representation for HelloRequest
   */
  export interface AsObject {
    name: string;
    hobbies: string[];
  }

  /**
   * Protobuf JSON representation for HelloRequest
   */
  export interface AsProtobufJSON {
    name: string;
    hobbies: string[];
  }
}

/**
 * Message implementation for HelloResponse
 */
export class HelloResponse implements GrpcMessage {
  static id = 'HelloResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new HelloResponse();
    HelloResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: HelloResponse) {
    _instance.greeting = _instance.greeting || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: HelloResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.greeting = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    HelloResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: HelloResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.greeting) {
      _writer.writeString(1, _instance.greeting);
    }
  }

  private _greeting: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of HelloResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<HelloResponse.AsObject>) {
    _value = _value || {};
    this.greeting = _value.greeting;
    HelloResponse.refineValues(this);
  }
  get greeting(): string {
    return this._greeting;
  }
  set greeting(value: string) {
    this._greeting = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    HelloResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): HelloResponse.AsObject {
    return {
      greeting: this.greeting
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): HelloResponse.AsProtobufJSON {
    return {
      greeting: this.greeting
    };
  }
}
export module HelloResponse {
  /**
   * Standard JavaScript object representation for HelloResponse
   */
  export interface AsObject {
    greeting: string;
  }

  /**
   * Protobuf JSON representation for HelloResponse
   */
  export interface AsProtobufJSON {
    greeting: string;
  }
}
