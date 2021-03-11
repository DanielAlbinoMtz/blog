import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-card-post-tree',
  templateUrl: './card-post-tree.component.html',
  styleUrls: ['./card-post-tree.component.css']
})
export class CardPostTreeComponent implements OnInit {
  
  articulos: Articulo;
  /* photoPost = 'http://amaliath3code.com/laravel/public/article/';
  photoAutor = 'http://amaliath3code.com/laravel/public/author/'; */
  photoPost = 'https://blog.axincapital.app/laravel/public/article/';
  photoAutor = 'https://blog.axincapital.app/laravel/public/author/';

  constructor(
    private articuloService: ArticuloService
  ) { }

  ngOnInit() {
    this.articuloService.getCategoriaFinanzas().subscribe(res => this.articulos = res)
    
   /*  this.articuloService.getUltimoArticulo().subscribe(data => this.lastArticulos = data) */
  }

}