import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  public product: Producto;

  constructor(
    private productService:ProductoService,
    private aroute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe((params)=>{
      this.product = this.productService.getProductById(params.id);
      });
  }

}
