import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { PublicComponent } from './components/public/public.component';


const routes: Routes = [
//rutas publicas
{path: '', redirectTo: 'blog',pathMatch: 'full'},
{path:'blog',component:PublicComponent},
/*rutas de categorias */
{path: 'finanzas',
loadChildren: () => import('./components/public/categories/categories.module').then(m=> m.CategoriesModule)
} ,
{path: 'autores',
loadChildren: () => import('./components/public/autores/autores.module').then(m=> m.AutoresModule)
}, 
/* {path: 'login', component: LoginComponent}, */

{path: 'post/:id', 
loadChildren:() => import('./components/public/post/post.module').then(m=> m.PostModule)
}

/* {path: 'algo',component: AppComponent} */

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation:'reload',
    initialNavigation:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
