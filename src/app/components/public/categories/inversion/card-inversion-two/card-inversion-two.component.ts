import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-card-inversion-two',
  templateUrl: './card-inversion-two.component.html',
  styleUrls: ['./card-inversion-two.component.css']
})
export class CardInversionTwoComponent implements OnInit {
  
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