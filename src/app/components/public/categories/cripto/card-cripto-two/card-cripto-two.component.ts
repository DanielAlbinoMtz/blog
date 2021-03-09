import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-card-cripto-two',
  templateUrl: './card-cripto-two.component.html',
  styleUrls: ['./card-cripto-two.component.css']
})
export class CardCriptoTwoComponent implements OnInit {

  articulos: Articulo[] = [];
  photoPost = 'http://amaliath3code.com/laravel/public/article/';
  photoAutor = 'http://amaliath3code.com/laravel/public/author/';

  constructor(
    private articuloService: ArticuloService
  ) { }

  ngOnInit() {
    this.articuloService.getCategoriaCripto().subscribe(res => this.articulos = res);
    
  }

 
  
}