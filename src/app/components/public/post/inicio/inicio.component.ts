import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  articulos: Articulo[]=[];
  photoPost = 'http://amaliath3code.com/laravel/public/article/';
  photoAutor = 'http://amaliath3code.com/laravel/public/author/';

  constructor( private _route: ActivatedRoute, private articuloService: ArticuloService ) { 
    /* console.log( this._route.snapshot.paramMap.get('id')); */
  }

  ngOnInit(){
    let id = +this._route.snapshot.paramMap.get('id');

    this.articuloService.getArticuloID(id).subscribe(resp => this.articulos = resp)
  }

}
