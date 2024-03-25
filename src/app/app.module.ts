import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GrpcCoreModule } from '@ngx-grpc/core';
import { GrpcWebClientModule } from '@ngx-grpc/grpc-web-client';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({ settings: { host: 'http://localhost:8080' } }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
