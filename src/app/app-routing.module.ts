import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guard/auth.guard';
import { ListaEpisodiosComponent } from './components/lista-episodios/lista-episodios.component';
import { ContentComponent } from './layouts/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SerieComponent } from './pages/serie/serie.component';
import { Page2Component } from './pages/page2/page2.component';

const routes: Routes = [
  // rota “vazia” é redirecionado à home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    component: ContentComponent, 
    children: [
      // https://endereco.com/home
      { path: 'home', component: HomeComponent },      
      { path: 'page2', component: Page2Component },
    ]
  },

  // https://endereco.com/serie/codigo_da_serie 
  // canActivate: [() => inject(myGuard).canActivate()]
  { path: 'serie/:id', component: SerieComponent, canActivate: [AuthGuard] },
  
  //rotas não existentes
  { path: '**', component: NotfoundComponent }  ,


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