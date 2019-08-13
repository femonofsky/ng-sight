import { ServerMessage } from './../../shared/server-message';
import { ServerService } from './../../services/server.service';
import { Server } from './../../shared/server';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { timer, Subscription } from 'rxjs';
@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.scss']
})
export class SectionHealthComponent implements OnInit, OnDestroy  {

  constructor(private _serverService: ServerService) { }

  servers: Server[];
  timeSubscription: Subscription;

  ngOnInit() {
    this.refreshData();
  }
  ngOnDestroy(): void {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }

  refreshData() {
    this._serverService.getServers().subscribe( result => {
      console.log(result);
      this.servers = result;
    });
    this.subscribeToData();
  }

  subscribeToData() {
    this.timeSubscription = timer(5000).subscribe( () => this.refreshData());
  }

  sendMessage(msg: ServerMessage) {
    this._serverService.handleSendMessage(msg)
      .subscribe( res => console.log(res));
  }
}
