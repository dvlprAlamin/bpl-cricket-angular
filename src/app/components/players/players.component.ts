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

  ngOnInit(): void { }
}
