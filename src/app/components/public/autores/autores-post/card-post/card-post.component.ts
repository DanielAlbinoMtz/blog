import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {

  articulo: Articulo = {
    id: null,
    titulo: '',
    extracto: '',
    contenido: '',
    tiempo: '',
    fecha: '',
    foto: '',
    autor: '',
    autor_id: '',
    perfil: '',
    categoria: '',
  }

  /* photoPost = 'http://amaliath3code.com/laravel/public/article/';
  photoAutor = 'http://amaliath3code.com/laravel/public/author/'; */

  //rutas para el desarrollo en produccion
  /* photoPost = 'https://blog.axincapital.app/laravel/public/article/';
  photoAutor = 'https://blog.axincapital.app/laravel/public/author/'; */

  //rutas para el desarrollo local
  photoPost = 'http://blog.local/article/';
  photoAutor = 'http://blog.local/author/';

  id : any;
  articulos: Articulo[];

  constructor(private activatedRoute: ActivatedRoute,  
    private articuloService: ArticuloService) { 
      this.activatedRoute.params.subscribe(params => {
        /* console.log(params.id); */
        this.id = params.id;
      /* console.log(this.id); */
      if(this.id){
        this.articuloService.getAllArticulos().subscribe((data: Articulo[])=>{
         /* console.log(data);  */
         this.articulos = data;
         /* console.log(data); */
          this.articulo = this.articulos.find((a)=>{
           return a.autor_id == this.id;
           
          }); /* console.log(this.articulo) */
          /* console.log(this.articulo); */
        }, (err) => {console.log(err);});
      } 
    });
    }

  ngOnInit(): void {
  }

}
