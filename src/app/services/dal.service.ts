import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelloRequest, HelloResponse } from 'src/proto-output/greeting-service.pb';
import { GreetingServiceClient } from 'src/proto-output/greeting-service.pbsc';

@Injectable({
  providedIn: 'root',
})
export class DalService {
  constructor(private client: GreetingServiceClient) {}

  public sendGreeting(helloRequest: HelloRequest): Observable<HelloResponse> {
    return this.client.greeting(helloRequest);
  }
}
