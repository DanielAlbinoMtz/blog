import { Component, OnInit } from '@angular/core';
import { SuscripcionService } from 'src/app/services/suscripcion/suscripcion.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public form = { email: null }

  constructor( private susService : SuscripcionService) { }

  ngOnInit(){
  }
  onSubmit(){
    this.susService.subscribeAxin(this.form.email).subscribe(res =>{
      console.log(this.form.email);
    }, err => console.log(err));
  }

}

