import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-card-post-two',
  templateUrl: './card-post-two.component.html',
  styleUrls: ['./card-post-two.component.css']
})
export class CardPostTwoComponent implements OnInit {

  articulos: Articulo[] = [];
  photoPost = 'http://amaliath3code.com/laravel/public/article/';
  photoAutor = 'http://amaliath3code.com/laravel/public/author/';

  constructor(
    private articuloService: ArticuloService
  ) { }

  ngOnInit() {
    this.articuloService.getCategoriaFinanzas().subscribe(res => this.articulos = res)
    
   /*  this.articuloService.getUltimoArticulo().subscribe(data => this.lastArticulos = data) */
  }

}