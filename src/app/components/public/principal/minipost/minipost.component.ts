import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-minipost',
  templateUrl: './minipost.component.html',
  styleUrls: ['./minipost.component.css']
})
export class MinipostComponent implements OnInit {

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
    private articuloService: ArticuloService,    
  ) { }
    filtroArticulo = ''; //esta linea es parte del pipe buscador 

  ngOnInit(): void {
    this.articuloService.getArticulo().subscribe(resp => this.articulos = resp)

    

  }

}
