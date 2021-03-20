import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { Autor } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor/autor.service';

@Component({
  selector: 'app-autores-about',
  templateUrl: './autores-about.component.html',
  styleUrls: ['./autores-about.component.css']
})
export class AutoresAboutComponent implements OnInit {

autor: Autor = {
  id: null,
    nombre: '',
    descripcion: '',
    url: '',
    foto:'',
    mediana:'',
    mini:'',
}

  //rutas para el desarrollo en produccion
  photoPost = 'https://blog.axincapital.app/laravel/public/article/';
  photoAutor = 'https://blog.axincapital.app/laravel/public/author/';

  //rutas para el desarrollo local
  /* photoPost = 'http://blog.local/article/';
  photoAutor = 'http://blog.local/author/'; */

  id : any;
  autores : Autor; 

  constructor(private activatedRoute: ActivatedRoute,  private autorService: AutorService) { 
    
    this.activatedRoute.params.subscribe(params => {
      /* console.log(params.id); */
      this.id = params.id; 
     /* console.log(this.id);  */
    
       this.autorService.getAutor(this.id).subscribe((data: Autor)=>{
             
       this.autores = data;
       this.autor = this.autores;
        /* console.log(data)  */ 
      }, (err) => {console.log(err);});
    
  }); 
  }

  ngOnInit(): void {
  }

}
