import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css'],
  providers: [Title, Meta]
})
export class BlockchainComponent implements OnInit {

  constructor(private title: Title, private metaTagService: Meta) {
    this.title.setTitle('Criptomonedas: ¿En qué consiste la tecnología blockchain en criptomonedas?')
   }

  ngOnInit(): void {
    this.metaTagService.addTags([
      {name: 'robots', content: 'index, follow'},
      { name: 'viewport', content: 'witdh=device-witdh, initial-scale=1'},
      {charset: 'UTF-8'}
    ]);

    this.metaTagService.updateTag(
      {name: 'description', content: '¿Tienes dudas acerca de lo que es la Blockchain? Entra en nuestra web y daremos respuesta a todas las preguntas que tengas sobre este tema.'}
    );
  }

}
