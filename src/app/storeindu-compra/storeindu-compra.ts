import { Component } from '@angular/core';
import { RopaList } from "../ropa-list/ropa-list";
import { CarritoCompra } from "../carrito-compra/carrito-compra";

@Component({
  selector: 'app-storeindu-compra',
  imports: [RopaList, CarritoCompra],
  templateUrl: './storeindu-compra.html',
  styleUrl: './storeindu-compra.scss',
})

export class StoreinduCompra {
  
}
