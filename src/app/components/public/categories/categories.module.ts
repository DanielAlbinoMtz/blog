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


@NgModule({
  declarations: [PrincipalComponent, CardPostComponent, SuscribeComponent, SuscribeTwoComponent, PaginatorComponent, InversionComponent, CrecimientoComponent, MercadosComponent, CriptoComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    
    

    
  ]
})
export class CategoriesModule { }
