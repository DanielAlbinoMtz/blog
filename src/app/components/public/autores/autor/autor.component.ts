import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Autor } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor/autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

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
    autores : Autor[] = []; 

  constructor(private activatedRoute: ActivatedRoute, private autorService: AutorService) { 
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id


      this.autorService.getAllAutor().subscribe((data: Autor[])=>{
        this.autores = data
        console.log(data)
      })
    })
  }

  ngOnInit(): void {
  }

}
