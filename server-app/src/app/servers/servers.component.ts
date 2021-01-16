import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  allowedNewServer = false;
  serverCreationStatus = 'no server was created!!'
  constructor() {
    setTimeout(()=> {
      this.allowedNewServer = true;
    },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus='server created!!'
  }
}
