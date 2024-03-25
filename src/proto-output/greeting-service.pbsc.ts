/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './greeting-service.pb';
import { GRPC_GREETING_SERVICE_CLIENT_SETTINGS } from './greeting-service.pbconf';
/**
 * Service client implementation for GreetingService
 */
@Injectable({ providedIn: 'any' })
export class GreetingServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Server streaming: /GreetingService/Greeting
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.HelloResponse>>
     */
    greeting: (
      requestData: thisProto.HelloRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.HelloResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/GreetingService/Greeting',
        requestData,
        requestMetadata,
        requestClass: thisProto.HelloRequest,
        responseClass: thisProto.HelloResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_GREETING_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('GreetingService', settings);
  }

  /**
   * Server streaming @/GreetingService/Greeting
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.HelloResponse>
   */
  greeting(
    requestData: thisProto.HelloRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.HelloResponse> {
    return this.$raw
      .greeting(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
