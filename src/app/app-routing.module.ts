import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEpisodiosComponent } from './components/lista-episodios/lista-episodios.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SerieComponent } from './pages/serie/serie.component';

const routes: Routes = [
  // rota “vazia” é redirecionado à home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // https://endereco.com/home
  { path: 'home', component: HomeComponent },
  
  // https://endereco.com/serie/codigo_da_serie 
  { path: 'serie/:id', component: SerieComponent },
  
  //rotas não existentes
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }