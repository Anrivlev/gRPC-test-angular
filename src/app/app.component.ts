import { Component, OnInit } from '@angular/core';
import { DalService } from './services/dal.service';
import { HelloRequest } from 'src/proto-output/greeting-service.pb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _dal: DalService) {}
  ngOnInit(): void {
    const helloRequest = new HelloRequest({ name: 'Andrey', hobbies: ['Kompuchter', 'Photo', 'Hooliganism'] });
    this._dal.sendGreeting(helloRequest).subscribe({
      next: value => console.log(value),
    });
  }
}
