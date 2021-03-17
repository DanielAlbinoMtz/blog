import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { SuscripcionService } from 'src/app/services/suscripcion/suscripcion.service';

@Component({
  selector: 'app-mininav',
  templateUrl: './mininav.component.html',
  styleUrls: ['./mininav.component.css']
})
export class MininavComponent implements OnInit {

  public form = { email: null }

  constructor( private susService : SuscripcionService, private router: Router) { }

  ngOnInit(){
    this.search.valueChanges
    .pipe(
      debounceTime(300)
    ).subscribe(value => this.searchEmitter.emit(value))
  }

  onSubmit(){
    this.susService.subscribeAxin(this.form.email).subscribe(res =>{
      console.log(this.form.email);
    }, err => console.log(err));
  }

  search = new FormControl('');

  @Output('search') searchEmitter = new EventEmitter<string>();

  

}