import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { player } from 'src/app/types';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-added-players',
  templateUrl: './added-players.component.html',
  styleUrls: ['./added-players.component.css']
})
export class AddedPlayersComponent implements OnInit {
  @Input() addedPlayers: player[] = [];
  @Output() removeEmitter = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  getSalary() {
    return this.addedPlayers.reduce((preValue, currentValue) => preValue + currentValue.salary, 0)
  }
  removePlayer(id: number) {
    this.removeEmitter.emit(id)
  }
}
