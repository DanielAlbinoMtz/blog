import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-card-inversion-tree',
  templateUrl: './card-inversion-tree.component.html',
  styleUrls: ['./card-inversion-tree.component.css']
})
export class CardInversionTreeComponent implements OnInit {

  articulos: Articulo[] = [];
  photoPost = 'http://amaliath3code.com/laravel/public/article/';
  photoAutor = 'http://amaliath3code.com/laravel/public/author/';

  constructor(
    private articuloService: ArticuloService
  ) { }

  ngOnInit() {
    this.articuloService.getCategoriaInversion().subscribe(res => this.articulos = res.reverse())
    
  }
}