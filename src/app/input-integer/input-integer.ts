import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ropa } from '../ropa-list/ropa';

@Component({
  selector: 'app-input-integer',
  imports: [],
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss',
})
export class InputInteger{

  @Input() quantity!: number;
  @Input() max!: number;

  @Output() quantityChange = new EventEmitter<number>();
  @Output() maxReached = new EventEmitter<string>();

  

  private updateQuantity(newQuantity: number): void {
    this.quantity = newQuantity;
    this.quantityChange.emit(this.quantity);
  }

  increaseQuantity() {
    if (this.quantity < this.max) {
      this.updateQuantity(this.quantity + 1);
    } else {
      this.maxReached.emit('Se ha alcanzado la cantidad máxima disponible.');
    }
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.updateQuantity(this.quantity - 1);
    }
  }
  
  //No esta puesto en el html, pero es para que no se pueda poner un numero negativo o mayor al stock en el input
  onQuantityChange(event: Event, ropa: ropa): void {
    if (ropa.quantity < 0) {
      event.preventDefault();
    } else if (ropa.quantity > ropa.stock) {
      event.preventDefault();
    }
  }

}
