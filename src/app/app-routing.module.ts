import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guard/auth.guard';
import { ListaEpisodiosComponent } from './components/lista-episodios/lista-episodios.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SerieComponent } from './pages/serie/serie.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  // rota “vazia” é redirecionado à home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },

  // https://endereco.com/serie/codigo_da_serie 
  // canActivate: [() => inject(myGuard).canActivate()]
  { path: 'serie/:id', component: SerieComponent, canActivate: [AuthGuard] },

  //rotas não existentes
  { path: '**', component: NotfoundComponent },


  // {
  //   path: 'lojas',
  //   canLoad: [],
  //   loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }