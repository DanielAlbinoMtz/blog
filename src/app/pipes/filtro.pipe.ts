import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {


  transform(lista: any[], texto: string): any[] {
    
    if(!texto) return null

    return lista.filter(articulo => 
      articulo.titulo.toUpperCase().includes(texto.toUpperCase()))
      /* return lista.filter(articulo => articulo.titulo.toUpperCase().contains(texto.toUpperCase)) */
  }

}
