import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Autor } from 'src/app/models/articulo';

@Component({
  selector: 'app-autores-about',
  templateUrl: './autores-about.component.html',
  styleUrls: ['./autores-about.component.css']
})
export class AutoresAboutComponent implements OnInit {

autor: Autor={
  id: null,
  nombre: '',
  descripcion: '',
  url: ''
}

  id : any;
  autores : Autor[];
  

  constructor(private activatedRoute: ActivatedRoute,  private articuloService: ArticuloService) { 
    
  /*   this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.id = params.id; */
    /* console.log(this.id); */
    
     /*  this.articuloService.getAutor(this.id).subscribe((data: Autor[])=>{
       console.log(data)        
       this.autor = data;
        
      }, (err) => {console.log(err);});
    
  }); */
  }

  ngOnInit(): void {
  }

}
