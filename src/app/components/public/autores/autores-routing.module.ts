import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAutorsComponent } from './all-autors/all-autors.component';
import { AndreaNComponent } from './all-autors/andrea-n/andrea-n.component';
import { AndreaQComponent } from './all-autors/andrea-q/andrea-q.component';
import { AnetteComponent } from './all-autors/anette/anette.component';
import { GustavoComponent } from './all-autors/gustavo/gustavo.component';
import { JeannetteComponent } from './all-autors/jeannette/jeannette.component';
import { JoseComponent } from './all-autors/jose/jose.component';
import { JudithComponent } from './all-autors/judith/judith.component';
import { MariaComponent } from './all-autors/maria/maria.component';
import { MarioComponent } from './all-autors/mario/mario.component';
import { AutorDetailsComponent } from './autor-details/autor-details.component';
import { AutorComponent } from './autor/autor.component';
import { AutoresComponent } from './autores.component';
  

const routes: Routes = [
  {
    path: '', component:AutoresComponent,
    children: [
      { path: '', component: AutorComponent},
      /*rutas estaticas de autores */
      { path: 'autor/nombre', component: AutorDetailsComponent},
      { path: 'autor/maria', component: MariaComponent},
      { path: 'autor/mario', component: MarioComponent},
      { path: 'autor/judith', component: JudithComponent},
      { path: 'autor/jose', component: JoseComponent},
      { path: 'autor/jeannette', component: JeannetteComponent},
      { path: 'autor/gustavo', component: GustavoComponent},
      { path: 'autor/anette', component: AnetteComponent},
      /*rutas estaticas de colaboradores */
      { path: 'colaborador/andreanunez', component:AndreaNComponent},
      { path: 'colaborador/andreaquirasco', component:AndreaQComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
