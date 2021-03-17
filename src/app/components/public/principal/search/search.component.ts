import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(
      debounceTime(300)
    ).subscribe(value => this.searchEmitter.emit(value))
  }

  /* buscarArticulo( texto: string){
    texto = texto.trim();
    if(texto.length === 0){
      return;
    } 
    this.router.navigate(['/buscar',texto]);
  } */

  search = new FormControl('');

  @Output('search') searchEmitter = new EventEmitter<string>();

}
