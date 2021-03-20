import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Autor } from 'src/app/models/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
/* baseURL = 'http://amaliath3code.com/api/'; */
//entorno local
/* baseURL = 'http://blog.local/api/'; */
//entorno produccion
baseURL = 'https://blog.axincapital.app/api/';
  constructor( private _http:HttpClient) { }

  public autor: Autor={
    id: null,
    nombre: '',
    descripcion: '',
    url: '',
    foto:'',
    mediana:'',
    mini:'',
  }

  getAutor(id){
    return this._http.get(`${this.baseURL}autores/${id}`)
    
  }

  getAllAutor(){
    return this._http.get(this.baseURL+'autores');
  }



  private crearArreglo(autoresObj: object){
    const autores: Autor[] = [];
    /* console.log(autoresObj) */

    Object.keys( autoresObj ).forEach( key => {

      const articulo: Autor = autoresObj[key];
      articulo.id = key;

      autores.push( articulo );
    })

    if ( autoresObj === null) { return []; } //validacion por si no hay datos en la base

    return autores;
  }
}
