import { Component, OnInit } from '@angular/core';
import { player } from 'src/app/types';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: player[] = data;
  addedPlayers: player[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  addPlayerToCart(player: player) {
    const exist = this.addedPlayers.find(({ id }) => id === player.id);
    if (exist) {
      alert("This player already added!");
    } else {
      this.addedPlayers.push(player)
    }
  }
  removePlayer(id: number) {
    this.addedPlayers = this.addedPlayers.filter((player) => player.id !== id)
  }
}
