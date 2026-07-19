import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ropa } from './ropa';
import { InputInteger } from "../input-integer/input-integer";
import { RopaCartService } from '../ropa-cart-service';

@Component({
  selector: 'app-ropa-list',
  imports: [CommonModule, FormsModule, InputInteger],
  templateUrl: './ropa-list.html',
  styleUrl: './ropa-list.scss',
})
export class RopaList implements OnInit {
  ropas: ropa [] = [{
    "name" : "Nike Sportswear club",
    "descripcion" : "Polo a rayas overzied par hombre",
    "stock" : 10,
    "price" : 29.99,
    "imagen" : "assets/images/img1.jpg",
    "clearance" : false,
    "quantity": 0,
  },
  {
    "name" : "Adidas Ultraboost",
    "descripcion" : "Zapatillas de running para hombre",
    "stock" : 0,
    "price" : 129.99,
    "imagen" : "assets/images/img2.jpg",
    "clearance" : false,
    "quantity": 0,
  },
  {
    "name" : "Reebok Classic",
    "descripcion" : "Zapatillas deportivas para hombre",
    "stock" : 8,
    "price" : 79.99,
    "imagen" : "assets/images/img3.jpg",
    "clearance" : true,
    "quantity": 0,
  }];
  

  constructor(private ropaCart: RopaCartService) { }

  addToCart(ropa: ropa): void {
    this.ropaCart.addToCart(ropa);
    ropa.stock -= ropa.quantity;
    ropa.quantity = 0;
  }
  
  ngOnInit(): void {
    // Inicialización no requerida por ahora.
  }

  maxReached(max: string): void {
    alert(max);
  }
  
}
