import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-card-mercados-two',
  templateUrl: './card-mercados-two.component.html',
  styleUrls: ['./card-mercados-two.component.css']
})
export class CardMercadosTwoComponent implements OnInit {

 
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

  ngOnInit() {
    this.articuloService.getCategoriaMercados().subscribe(res => this.articulos = res)
    
  }
}