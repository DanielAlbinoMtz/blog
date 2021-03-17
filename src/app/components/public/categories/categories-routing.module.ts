import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CriptoComponent } from './cripto/cripto.component';
import { CrecimientoComponent } from './emprender/crecimiento.component';
import { InversionComponent } from './inversion/inversion.component';
import { MercadosComponent } from './mercados/mercados.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  {
    path: '', component: CategoriesComponent,
    children: [
      { path: '', component: PrincipalComponent },
      /*rutas de una categoria */
      { path: 'inversión', component: InversionComponent},/*este ya es un post de ejemplo */
      /*rutas de segunda categoria 'crecimiento/:crecimientoid' */
      { path: 'emprender', component: CrecimientoComponent},

      { path: 'mercados', component: MercadosComponent},

      { path: 'cripto', component: CriptoComponent},
      /*rutas de escritor */

      /*rutas de detalles */
      /* { path: 'autor/nombre', component: AutorDetailsComponent}
     */  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
