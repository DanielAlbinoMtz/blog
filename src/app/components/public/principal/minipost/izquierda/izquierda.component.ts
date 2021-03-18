import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-izquierda',
  templateUrl: './izquierda.component.html',
  styleUrls: ['./izquierda.component.css']
})
export class IzquierdaComponent implements OnInit {

  articulos: Articulo/* [] = [] */;
 /* photoPost = 'http://amaliath3code.com/laravel/public/article/';
  photoAutor = 'http://amaliath3code.com/laravel/public/author/'; */

  //rutas para el desarrollo en produccion
  /* photoPost = 'https://blog.axincapital.app/laravel/public/article/';
  photoAutor = 'https://blog.axincapital.app/laravel/public/author/'; */

  //rutas para el desarrollo local
  photoPost = 'http://blog.local/article/';
  photoAutor = 'http://blog.local/author/';
  
  constructor(
    private articuloService: ArticuloService
  ) { }

  ngOnInit() {
    this.articuloService.getArticuloCategoria().subscribe(res => this.articulos = res, err=>console.log(err))
    
   /*  this.articuloService.getUltimoArticulo().subscribe(data => this.lastArticulos = data) */
  }

}
