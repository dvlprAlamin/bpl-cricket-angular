import { CartService } from './../../services/cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { player } from 'src/app/types';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-added-players',
  templateUrl: './added-players.component.html',
  styleUrls: ['./added-players.component.css']
})
export class AddedPlayersComponent implements OnInit {
  constructor(private CartService: CartService) { }

  ngOnInit(): void {
  }
  getSalary() {
    return this.CartService.get().reduce((preValue, currentValue) => preValue + currentValue.salary, 0)
  }
  getCart() {
    return this.CartService.get();
  }
}
