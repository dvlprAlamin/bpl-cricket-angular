import { CartService } from './../../services/cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { player } from 'src/app/types';

@Component({
  selector: 'app-added-single-player',
  templateUrl: './added-single-player.component.html',
  styleUrls: ['./added-single-player.component.css']
})
export class AddedSinglePlayerComponent implements OnInit {
  @Input() singleAddedPlayer: player = {} as player;
  constructor(private CartService: CartService) { }

  ngOnInit(): void {
  }
  removePlayer(id: number) {
    this.CartService.remove(id)
  }
}
