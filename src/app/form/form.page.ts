import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../model/producto';
import { ProductoService } from '../services/producto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  public products: Producto[];
  public photo:string;
  public name:string;
  public price:number;
  public prods:Producto[];
  //
  public product : Producto;

  constructor(
    private productService:ProductoService,
    private router:Router) 
    {
    //this.products = this.productService.getProducts();
    }

  ngOnInit() {
  }

  /*public addProduct(){
    this.prods = this.productService.getProducts();
    let id = this.prods.length
    this.product={
      id:id,
      photo:this.photo,
      name:this.name,
      price:this.price
    }
    this.productService.addProduct(this.product);
    this.products = this.productService.getProducts();
    this.router.navigateByUrl('/home',{replaceUrl:true});
  }*/

  //
  public newProduct() {
    //let cont = this.productService.getProducts.length
    this.product = {
      ids:1,
      photo:this.photo, 
      name:this.name,
      price:this.price,
    } 

    this.productService.newProduct(this.product);
    //this.presentToast('top');
    console.log(this.product);
    this.router.navigate(['..']);
  }

}
