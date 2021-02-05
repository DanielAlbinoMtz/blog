import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutorComponent } from './autor/autor.component';
import { AutorDetailsComponent } from './autor-details/autor-details.component';
import { AutoresAboutComponent } from './autores-about/autores-about.component';
import { AutoresPostComponent } from './autores-post/autores-post.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AutorComponent, AutorDetailsComponent, AutoresAboutComponent, AutoresPostComponent],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    RouterModule,

  ]
})  
export class AutoresModule { }
