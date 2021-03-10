import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-card-mercados',
  templateUrl: './card-mercados.component.html',
  styleUrls: ['./card-mercados.component.css']
})
export class CardMercadosComponent implements OnInit {

  articulos: Articulo;
  photoPost = 'http://amaliath3code.com/laravel/public/article/';
  photoAutor = 'http://amaliath3code.com/laravel/public/author/';

  constructor(
    private articuloService: ArticuloService
  ) { }

  ngOnInit() {
    this.articuloService.getCategoriaMercados().subscribe(res => this.articulos = res)
    
  }
}
