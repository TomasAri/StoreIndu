import { Injectable } from '@angular/core';
import { ropa } from './ropa-list/ropa';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RopaCartService {
    
    private _shopList: ropa[] = [];
    shopList: BehaviorSubject<ropa[]> = new BehaviorSubject(this._shopList);

    constructor() {}

    addToCart(ropaItem: ropa): void {

    let item = this._shopList.find((v1) => v1.name === ropaItem.name);

    if (!item) {
        this._shopList = [...this._shopList, { ...ropaItem }];
    } else {
        item.quantity += ropaItem.quantity;
    }

    this.shopList.next(this._shopList);
    }
}
