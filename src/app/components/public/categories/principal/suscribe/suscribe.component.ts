import { Component, OnInit } from '@angular/core';

import { SuscripcionService } from 'src/app/services/suscripcion/suscripcion.service';

@Component({
  selector: 'app-suscribe',
  templateUrl: './suscribe.component.html',
  styleUrls: ['./suscribe.component.css']
})
export class SuscribeComponent implements OnInit {

  public form = { email: null }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    
    window.location.href='https://axincapital.com/#/registro/'+this.form.email;
  }

}
