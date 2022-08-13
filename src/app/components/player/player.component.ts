import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { player } from 'src/app/types';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: player = {} as player;
  @Output() playerEmitter = new EventEmitter<player>();
  constructor() {

  }

  ngOnInit(): void {
  }
  addSinglePlayer(player: player) {
    this.playerEmitter.emit(player)
  }
}
