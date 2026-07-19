import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RopaCartService } from '../ropa-cart-service';
import { ropa } from '../ropa-list/ropa';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito-compra',
  imports: [CommonModule],
  templateUrl: './carrito-compra.html',
  styleUrl: './carrito-compra.scss',
})
export class CarritoCompra {

  cartList$!: Observable<ropa[]>;

  constructor(private ropaCart: RopaCartService) {
    this.cartList$ = ropaCart.shopList.asObservable();
  }
}
