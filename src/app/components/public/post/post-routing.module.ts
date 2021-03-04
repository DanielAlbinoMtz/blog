import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BitcoinComponent } from './inicio/articulos/bitcoin/bitcoin.component';
import { BlockchainComponent } from './inicio/articulos/blockchain/blockchain.component';
import { DolarComponent } from './inicio/articulos/dolar/dolar.component';
import { EmprendedoresComponent } from './inicio/articulos/emprendedores/emprendedores.component';
import { OutsourcingComponent } from './inicio/articulos/outsourcing/outsourcing.component';
import { SociedadComponent } from './inicio/articulos/sociedad/sociedad.component';
import { SocioComponent } from './inicio/articulos/socio/socio.component';
import { InicioComponent } from './inicio/inicio.component';
import { PostComponent } from './post.component';


const routes: Routes = [
  {
    path: '', component: PostComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'outsourcing', component:OutsourcingComponent },
      { path: 'debilidad-del-dolar', component:DolarComponent },
      { path: 'blockchain-en-criptomonedas', component:BlockchainComponent },
      { path: 'porque-bitcoin', component: BitcoinComponent },
      { path: 'tipo-de-sociedad', component: SociedadComponent },
      { path: 'tipos-de-emprendedor', component: EmprendedoresComponent },
      { path: 'el-mejor-socio', component: SocioComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
