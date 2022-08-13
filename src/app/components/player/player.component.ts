import { CartService } from './../../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { player } from 'src/app/types';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: player = {} as player;
  constructor(private CartService: CartService) { }
  ngOnInit(): void {
  }
  addSinglePlayer(player: player) {
    this.CartService.add(player);
  }
}
