npm i -g protoc-gen-ts

npm i google-protobuf
npm i @types/google-protobuf
npm i @grpc/proto-loader

// ??????????? Not sure it is any better
npm i -S @ngx-grpc/common @ngx-grpc/core @ngx-grpc/grpc-web-client @ngx-grpc/well-known-types google-protobuf grpc-web
npm i -D @ngx-grpc/protoc-gen-ng @types/google-protobuf

npm i protoc-gen-grpc-web -g

npm i ts-node
npm i grpc-web
npm i google-protobuf

protoc -I=./src/proto GreetingService.proto --js_out=import_style=commonjs:src/proto-output --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:src/proto-output 

envoy -c envoy.yaml
