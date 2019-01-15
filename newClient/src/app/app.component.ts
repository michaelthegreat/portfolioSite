import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myStyle: object = {};
  myParams: object = {};
  title = 'newClient';
  constructor() {

  }

  ngOnInit(){

  }
}
