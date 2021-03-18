import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-articles-trend',
  templateUrl: './articles-trend.component.html',
  styleUrls: ['./articles-trend.component.css']
})
export class ArticlesTrendComponent implements OnInit {

  
  articulos: Articulo;
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

  ngOnInit(): void {
    this.articuloService.getArticulo().subscribe(resp => this.articulos = resp)
   
  
  }

}
