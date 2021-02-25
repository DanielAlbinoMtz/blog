import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
/* import { AutorComponent } from './autor/autor.component'; */
import { AutorDetailsComponent } from './autor-details/autor-details.component';
import { AutoresAboutComponent } from './autores-about/autores-about.component';
/* import { AutoresPostComponent } from './autores-post/autores-post.component'; */
import { RouterModule } from '@angular/router';
import { CardPostMiniComponent } from './autores-post/card-post-mini/card-post-mini.component';
import { CardPostComponent } from './autores-post/card-post/card-post.component';
import { AutoresPostComponent } from './autores-post/autores-post.component';
import { AutorComponent } from './autor/autor.component';

import { TeamComponent } from './autor/team/team.component';
import { AllAutorsComponent } from './all-autors/all-autors.component';
import { MariaComponent } from './all-autors/maria/maria.component';
import { JudithComponent } from './all-autors/judith/judith.component';
import { JoseComponent } from './all-autors/jose/jose.component';

import { MarioComponent } from './all-autors/mario/mario.component';
import { AndreaNComponent } from './all-autors/andrea-n/andrea-n.component';
import { AndreaQComponent } from './all-autors/andrea-q/andrea-q.component';
import { GustavoComponent } from './all-autors/gustavo/gustavo.component';
import { AnetteComponent } from './all-autors/anette/anette.component';
import { JeannetteComponent } from './all-autors/jeannette/jeannette.component';



@NgModule({
  declarations: [ 
    AutorDetailsComponent, 
    AutoresAboutComponent,
    AutoresPostComponent,
    AutorComponent, 
    CardPostMiniComponent,
    CardPostComponent,
    TeamComponent, 
    AllAutorsComponent, 
    MariaComponent, 
    JudithComponent, 
    JoseComponent, 
    MarioComponent, 
    AndreaNComponent, 
    AndreaQComponent, GustavoComponent, AnetteComponent, JeannetteComponent, /* AutoresPostComponent */],

    

  imports: [
    CommonModule,
    AutoresRoutingModule,
    RouterModule,
    

  ]
})  
export class AutoresModule { }
