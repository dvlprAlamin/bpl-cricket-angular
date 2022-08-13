import { Injectable } from '@angular/core';
import { player } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: player[] = [];
  constructor() { }
  add(player: player) {
    const exist = this.cart.find(({ id }) => id === player.id);
    if (exist) {
      alert("This player already added!");
    } else {
      this.cart.push(player)
    }
  }
  get() {
    return this.cart;
  }
  remove(id: number) {
    this.cart = this.cart.filter((player) => player.id !== id)
  }
}
