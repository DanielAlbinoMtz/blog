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

  photoPost = 'https://blog.axincapital.app/laravel/public/article/';
  photoAutor = 'https://blog.axincapital.app/laravel/public/author/';

  filtroValor = ''

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit() {
    this._http.get('https://blog.axincapital.app/api/articulos').subscribe
    ((data: any[]) => this.articulos = data)
  }

  articulos = []

}