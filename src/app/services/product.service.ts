import { Injectable } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {Products} from '../../json/product'

@Injectable()

export class ProductService {

    constructor(private _http: HttpClientModule){}

    getProducts() {
        return Products
    }
}