import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-minipost',
  templateUrl: './minipost.component.html',
  styleUrls: ['./minipost.component.css']
})
export class MinipostComponent implements OnInit {

  articulos: Articulo;
  photoPost = 'http://amaliath3code.com/laravel/public/article/';
  photoAutor = 'http://amaliath3code.com/laravel/public/author/';

  constructor(
    private articuloService: ArticuloService,
    
  ) { }

  ngOnInit(): void {
    this.articuloService.getArticulo().subscribe(resp => this.articulos = resp)


  }

}
