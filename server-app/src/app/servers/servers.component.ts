import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  allowedNewServer = false;
  serverCreationStatus = 'no server was created!!';
  serverName = '';
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

  onUpdateServer(event:any) {
    this.serverName = event.target.value;
  }
}
