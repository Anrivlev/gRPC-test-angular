import * as grpcWeb from 'grpc-web';

import * as GreetingService_pb from './GreetingService_pb';

export class GreetingServiceClient {
  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any }
  );

  greeting(
    request: GreetingService_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<GreetingService_pb.HelloResponse>;
}

export class GreetingServicePromiseClient {
  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any }
  );

  greeting(
    request: GreetingService_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<GreetingService_pb.HelloResponse>;
}
