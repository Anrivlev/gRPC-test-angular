npm i -g protoc-gen-ts

npm i google-protobuf
npm i @types/google-protobuf
npm i @grpc/grpc-js
npm i @grpc/proto-loader

cd ./src/app/proto
protoc --ts_out=../proto-output/ GreetingService.proto
cd ../../..

// ??????????? Not sure it is any better
npm i -S @ngx-grpc/common @ngx-grpc/core @ngx-grpc/grpc-web-client @ngx-grpc/well-known-types google-protobuf grpc-web
npm i -D @ngx-grpc/protoc-gen-ng @types/google-protobuf


npm i @improbable-eng/grpc-web
