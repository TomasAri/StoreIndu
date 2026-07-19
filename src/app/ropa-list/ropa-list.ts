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
    "name" : "Zip Hoodie Boxy Fit “Basic” Grey",
    "descripcion" : "Zip Hoodie corte Boxy Fit con frisa de algodon calidad premium",
    "stock" : 5,
    "price" : 60.00,
    "imagen" : "assets/images/img2.webp",
    "clearance" : false,
    "quantity": 0,
  },
  {
    "name" : "Reebok Classic",
    "descripcion" : "Zapatillas deportivas para hombre",
    "stock" : 2,
    "price" : 89.99,
    "imagen" : "assets/images/img3.webp",
    "clearance" : false,
    "quantity": 0,
  },
  {
      "name" : "Sweater Oversize Templ",
      "descripcion" : "Sweater con diseño y un calce Oversize, tejido con hilo importado Calidad Premium",
      "stock" : 6,
      "price" : 24.99,
      "imagen" : "assets/images/img4.webp",
      "clearance" : true,
      "quantity": 0,
    },
  {
    "name" : "Zapatillas Reebok Split Flex",
    "descripcion" : "Zapatillas deportivas para hombre",
    "stock" : 0,
    "price" : 89.99,
    "imagen" : "assets/images/img5.webp",
    "clearance" : false,
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
