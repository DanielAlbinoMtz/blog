import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { KeepConversationComponent } from './inicio/keep-conversation/keep-conversation.component';
import { SuscribeComponent } from './inicio/keep-conversation/suscribe/suscribe.component';
import { OutsourcingComponent } from './inicio/articulos/outsourcing/outsourcing.component';
import { DolarComponent } from './inicio/articulos/dolar/dolar.component';
import { BlockchainComponent } from './inicio/articulos/blockchain/blockchain.component';
import { BitcoinComponent } from './inicio/articulos/bitcoin/bitcoin.component';
import { SociedadComponent } from './inicio/articulos/sociedad/sociedad.component';
import { EmprendedoresComponent } from './inicio/articulos/emprendedores/emprendedores.component';
import { SocioComponent } from './inicio/articulos/socio/socio.component';


@NgModule({
  declarations: [InicioComponent, KeepConversationComponent, SuscribeComponent, OutsourcingComponent, DolarComponent, BlockchainComponent, BitcoinComponent, SociedadComponent, EmprendedoresComponent, SocioComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    
  ]
})
export class PostModule { }
