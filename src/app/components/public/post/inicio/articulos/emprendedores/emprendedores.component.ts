import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-emprendedores',
  templateUrl: './emprendedores.component.html',
  styleUrls: ['./emprendedores.component.css'],
  providers: [Title,Meta]
})
export class EmprendedoresComponent implements OnInit {

  constructor(private title: Title, private metaTagService: Meta) { 
    this.title.setTitle('¿Cuáles son los tipos de emprendedores que existen?')
  }

  ngOnInit(): void {

    this.metaTagService.addTags([
      {name: 'robots', content: 'index, follow'},
      { name: 'viewport', content: 'witdh=device-witdh, initial-scale=1'},
      {charset: 'UTF-8'}
    ]);

    this.metaTagService.updateTag(
      {name: 'description', content: 'En el mundo de los negocios, podrás encontrar distintos tipos de emprendedores. Si eres un emprendedor y quieres conocer en cuál de los tipos encajas, te invitamos a seguir leyendo.'}
    );
  }

}
