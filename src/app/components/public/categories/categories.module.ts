import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { CardPostComponent } from './principal/card-post/card-post.component';
import { SuscribeComponent } from './principal/suscribe/suscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuscribeTwoComponent } from './principal/suscribe-two/suscribe-two.component';
import { PaginatorComponent } from './principal/paginator/paginator.component';
import { InversionComponent } from './inversion/inversion.component';
import { CrecimientoComponent } from './emprender/crecimiento.component';
import { RouterModule } from '@angular/router';
import { MercadosComponent } from './mercados/mercados.component';
import { CriptoComponent } from './cripto/cripto.component';
import { CardInversionComponent } from './inversion/card-inversion/card-inversion.component';
import { CardInversionTwoComponent } from './inversion/card-inversion-two/card-inversion-two.component';
import { CardInversionTreeComponent } from './inversion/card-inversion-tree/card-inversion-tree.component';
import { CardPostTwoComponent } from './principal/card-post-two/card-post-two.component';
import { CardPostTreeComponent } from './principal/card-post-tree/card-post-tree.component';
import { CardEmprenderComponent } from './emprender/card-emprender/card-emprender.component';
import { CardEmprenderTwoComponent } from './emprender/card-emprender-two/card-emprender-two.component';
import { CardEmprenderTreeComponent } from './emprender/card-emprender-tree/card-emprender-tree.component';
import { CardMercadosComponent } from './mercados/card-mercados/card-mercados.component';
import { CardMercadosTwoComponent } from './mercados/card-mercados-two/card-mercados-two.component';
import { CardMercadosThreeComponent } from './mercados/card-mercados-three/card-mercados-three.component';
import { CardCriptoComponent } from './cripto/card-cripto/card-cripto.component';
import { CardCriptoTwoComponent } from './cripto/card-cripto-two/card-cripto-two.component';
import { CardCriptoThreeComponent } from './cripto/card-cripto-three/card-cripto-three.component';


@NgModule({
  declarations: [PrincipalComponent, CardPostComponent, SuscribeComponent, SuscribeTwoComponent, PaginatorComponent, InversionComponent, CrecimientoComponent, MercadosComponent, CriptoComponent, CardInversionComponent, CardInversionTwoComponent, CardInversionTreeComponent, CardPostTwoComponent, CardPostTreeComponent, CardEmprenderComponent, CardEmprenderTwoComponent, CardEmprenderTreeComponent, CardMercadosComponent, CardMercadosTwoComponent, CardMercadosThreeComponent, CardCriptoComponent, CardCriptoTwoComponent, CardCriptoThreeComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    
    

    
  ]
})
export class CategoriesModule { }
