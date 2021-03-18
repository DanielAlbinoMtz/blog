import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { SidenavComponent } from './components/public/sidenav/sidenav.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { PublicComponent } from './components/public/public.component';
import { PrincipalComponent } from './components/public/principal/principal.component';
import { ContenComponent } from './components/public/sidenav/conten/conten.component';
import { SearchComponent } from './components/public/principal/search/search.component';
import { MinipostComponent } from './components/public/principal/minipost/minipost.component';
import { DerechaComponent } from './components/public/principal/minipost/derecha/derecha.component';
import { IzquierdaComponent } from './components/public/principal/minipost/izquierda/izquierda.component';
import { AbajoComponent } from './components/public/principal/minipost/abajo/abajo.component';
import { TrendComponent } from './components/public/principal/minipost/trend/trend.component';
import { SubscribeComponent } from './components/public/principal/minipost/subscribe/subscribe.component';
import { CategoriesComponent } from './components/public/categories/categories.component';
import { CategoriesRoutingModule } from './components/public/categories/categories-routing.module';
import { AutoresComponent } from './components/public/autores/autores.component';
import { AutoresRoutingModule } from './components/public/autores/autores-routing.module';
import { MininavComponent } from './components/public/principal/mininav/mininav.component';
import { LoginComponent } from './components/public/login/login.component';
import { CategoriesModule } from './components/public/categories/categories.module';
import { AutoresModule } from './components/public/autores/autores.module';
import { ModalComponent } from './components/public/modal/modal.component';
import { RedesComponent } from './components/public/sidenav/conten/redes/redes.component';
import { RouterModule } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { PostModule } from './components/public/post/post.module';
import { PostComponent } from './components/public/post/post.component';
import { PostRoutingModule } from './components/public/post/post-routing.module';
import { RelatedArticleComponent } from './components/public/related-article/related-article.component';
import { ArticlesTrendComponent } from './components/public/principal/minipost/trend/articles-trend/articles-trend.component';
/*evitar los errores de recarga */
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ArticuloService} from './services/articulo/articulo.service';
import { SuscripcionService } from './services/suscripcion/suscripcion.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    FooterComponent,
    PublicComponent,
    PrincipalComponent,
    ContenComponent,
    SearchComponent,
    MinipostComponent,
    DerechaComponent,
    IzquierdaComponent,
    AbajoComponent,
    TrendComponent,
    SubscribeComponent,
    CategoriesComponent,
    AutoresComponent,
    MininavComponent,
    LoginComponent,
    ModalComponent,
    RedesComponent,
    PostComponent,
    RelatedArticleComponent,
    ArticlesTrendComponent,
    FiltroPipe,
    
   /*  CardPostComponent,
    CardPostMiniComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CategoriesRoutingModule,
    AutoresRoutingModule,
    CategoriesModule,
    AutoresModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PostModule,
    PostRoutingModule,
    CommonModule,
    HttpClientJsonpModule
    
    
    

  ],
  providers: [ArticuloService, SuscripcionService,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
