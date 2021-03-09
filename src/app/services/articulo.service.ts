import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Articulo } from '../models/articulo';


@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
baseURL = 'http://amaliath3code.com/api/' ;
  constructor( private _http:HttpClient) { }

  getArticulo(){ /*servicio para el minipost que es el primer cuadro este solo llamara al ultimo en el array */
    return this._http.get(this.baseURL+'articulos').pipe(
      map( this.crearArreglo )
    );
   }

   getArticuloCategoria(){ //traer grupo de articulos por categoria llenara el lado izquierdo
    return this._http.get(this.baseURL+'categoria/4').pipe(
      map(this.crearArreglo)
    );
    /*categorias id
      finanzas    1
      inversion   2
      emprender   3
      mercados    4
      cripto      5 */
  }

  getAllArticulos(){/* Este metodo llama a todos los articulos que existen y llena el lado derecho */
    return this._http.get(this.baseURL+'articulos').pipe(
      map(this.crearArreglo)
    )
  }

  getCategoriaEmprender(){ //traer grupo de articulos por categoria categeoria 3 es emprender y llena el espacio azul principal
    return this._http.get(this.baseURL+'categoria/3').pipe(
      map(this.crearArreglo)
    );
  }

  getCategoriaInversion(){//traer grupo de articulos relacionados a la categoria inversion
    return this._http.get(this.baseURL+'categoria/2').pipe(
      map(this.crearArreglo)
    )
  }



   private crearArreglo(articulosObj: object){
    const articulos: Articulo[] = [];
    /* console.log(articulosObj) */

    Object.keys( articulosObj ).forEach( key => {

      const articulo: Articulo = articulosObj[key];
      articulo.id = key;

      articulos.push( articulo );
    })

    if ( articulosObj === null) { return []; } //validacion por si no hay datos en la base

    return articulos;
  }
 

}
