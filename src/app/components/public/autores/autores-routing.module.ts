import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorDetailsComponent } from './autor-details/autor-details.component';
import { AutorComponent } from './autor/autor.component';
import { AutoresComponent } from './autores.component';
  

const routes: Routes = [
  {
    path: '', component:AutoresComponent,
    children: [
      { path: '', component: AutorComponent},
     {path: 'autor/nombre', component: AutorDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
