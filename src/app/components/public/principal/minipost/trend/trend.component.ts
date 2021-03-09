import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css']
})
export class TrendComponent implements OnInit {

  articulos: Articulo[] = [];
  photoPost = 'http://amaliath3code.com/laravel/public/article/';
  photoAutor = 'http://amaliath3code.com/laravel/public/author/';
  
  constructor(
    private articuloService: ArticuloService
  ) { }

  ngOnInit(): void {
    this.articuloService.getArticulo().subscribe(resp => this.articulos = resp)
   
  
  }

}
