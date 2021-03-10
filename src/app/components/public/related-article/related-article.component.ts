import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-related-article',
  templateUrl: './related-article.component.html',
  styleUrls: ['./related-article.component.css']
})
export class RelatedArticleComponent implements OnInit {

  articulos: Articulo;
  photoPost = 'http://amaliath3code.com/laravel/public/article/';
  photoAutor = 'http://amaliath3code.com/laravel/public/author/';

  
  constructor(
    private articuloService: ArticuloService
  ) { }
    
  ngOnInit(){
    this.articuloService.getAllArticulos().subscribe(res =>this.articulos = res);
   

  }

}
