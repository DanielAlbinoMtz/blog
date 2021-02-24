import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAutorsComponent } from './all-autors/all-autors.component';
import { AndreaNComponent } from './all-autors/andrea-n/andrea-n.component';
import { AndreaQComponent } from './all-autors/andrea-q/andrea-q.component';
import { JennyComponent } from './all-autors/jenny/jenny.component';
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
      { path: 'autor/nombre', component: AutorDetailsComponent},
      { path: 'autor/maria', component: MariaComponent},
      { path: 'autor/mario', component: MarioComponent},
      { path: 'autor/judith', component: JudithComponent},
      { path: 'autor/jose', component: JoseComponent},
      { path: 'autor/jenny', component:JennyComponent},
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
