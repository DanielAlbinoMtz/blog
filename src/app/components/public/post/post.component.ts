import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  handleSearch(value: string){
    this.filtroValor = value

  }

 //rutas para el desarrollo en produccion
  photoPost = 'https://blog.axincapital.app/laravel/public/article/';
  photoAutor = 'https://blog.axincapital.app/laravel/public/author/';

  //rutas para el desarrollo local
  /* photoPost = 'http://blog.local/article/';
  photoAutor = 'http://blog.local/author/'; */
  filtroValor = ''

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit() {
    //produccion
    this._http.get('https://blog.axincapital.app/api/articulos').subscribe
    ((data: any[]) => this.articulos = data)

    //prueba local
    /* this._http.get('http://blog.local/api/articulos').subscribe
    ((data: any[]) => this.articulos = data) */
  }

  articulos = []

}