import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GreetingServiceClient } from 'src/proto-output/GreetingService_grpc_web_pb';
import { HelloRequest, HelloResponse } from 'src/proto-output/GreetingService_pb';

@Injectable({
  providedIn: 'root',
})
export class DalService {
  private client: GreetingServiceClient;
  constructor() {
    this.client = new GreetingServiceClient('http://localhost:8080');
  }

  public sendGreeting(helloRequest: HelloRequest): Subject<HelloResponse> {
    const subject = new Subject<HelloResponse>();
    const call = this.client.greeting(helloRequest, { 'custom-header-1': 'value1' });
    call.on('data', value => subject.next(value));
    call.on('end', () => subject.complete());
    call.on('error', error => subject.error(error));
    return subject;
  }
}
