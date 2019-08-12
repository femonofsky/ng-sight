import { Server } from './../../shared/server';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.scss']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers: Server[] = [
    { id: 1, name: 'dev-web', isOnline: true},
    { id: 2, name: 'prod-web', isOnline: false},
    { id: 3, name: 'dev-mail', isOnline: true},
    { id: 4, name: 'prod-web', isOnline: true}
  ];


  ngOnInit() {
  }

}
