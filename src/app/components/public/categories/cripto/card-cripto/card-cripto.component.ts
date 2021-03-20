import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-card-cripto',
  templateUrl: './card-cripto.component.html',
  styleUrls: ['./card-cripto.component.css']
})
export class CardCriptoComponent implements OnInit {
  p: number = 1; 

  articulos: Articulo[] = [];
  /* photoPost = 'http://amaliath3code.com/laravel/public/article/';
  photoAutor = 'http://amaliath3code.com/laravel/public/author/'; */

  //rutas para el desarrollo en produccion
  photoPost = 'https://blog.axincapital.app/laravel/public/article/';
  photoAutor = 'https://blog.axincapital.app/laravel/public/author/';

  //rutas para el desarrollo local
  /* photoPost = 'http://blog.local/article/';
  photoAutor = 'http://blog.local/author/'; */

  constructor(
    private articuloService: ArticuloService
  ) { }

  ngOnInit() {
    this.articuloService.getCategoriaCripto().subscribe((res: Articulo[]) => this.articulos = res)
    
  }
}