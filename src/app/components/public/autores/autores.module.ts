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



@NgModule({
  declarations: [ AutorDetailsComponent, AutoresAboutComponent, AutoresPostComponent,
    AutorComponent, CardPostMiniComponent, CardPostComponent, TeamComponent, /* AutoresPostComponent */],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    RouterModule,
    

  ]
})  
export class AutoresModule { }
