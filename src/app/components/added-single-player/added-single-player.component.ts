import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { player } from 'src/app/types';

@Component({
  selector: 'app-added-single-player',
  templateUrl: './added-single-player.component.html',
  styleUrls: ['./added-single-player.component.css']
})
export class AddedSinglePlayerComponent implements OnInit {
  @Input() singleAddedPlayer: player = {} as player;
  @Output() removeEmitter = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  removePlayer(id: number) {
    this.removeEmitter.emit(id)
  }
}
