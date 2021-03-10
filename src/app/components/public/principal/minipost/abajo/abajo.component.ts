import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-abajo',
  templateUrl: './abajo.component.html',
  styleUrls: ['./abajo.component.css']
})
export class AbajoComponent implements OnInit {

  articulos: Articulo;
  photoPost = 'http://amaliath3code.com/laravel/public/article/';
  photoAutor = 'http://amaliath3code.com/laravel/public/author/';


  constructor(
    private articuloService: ArticuloService
  ) { }

  ngOnInit(){
    this.articuloService.getCategoriaEmprender().subscribe(res=>this.articulos = res)
  }

}
