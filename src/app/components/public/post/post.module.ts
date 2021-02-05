import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { KeepConversationComponent } from './inicio/keep-conversation/keep-conversation.component';
import { SuscribeComponent } from './inicio/keep-conversation/suscribe/suscribe.component';


@NgModule({
  declarations: [InicioComponent, KeepConversationComponent, SuscribeComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    
  ]
})
export class PostModule { }
