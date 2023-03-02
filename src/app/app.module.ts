import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEpisodiosComponent } from './components/lista-episodios/lista-episodios.component';
import { SerieComponent } from './pages/serie/serie.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { MenuComponent } from './components/menu/menu.component';
import { Page2Component } from './pages/page2/page2.component';
import { ProjecaoNomeadaComponent } from './components/projecao-nomeada/projecao-nomeada.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieComponent,
    ListaEpisodiosComponent,
    HomeComponent,
    NotfoundComponent,
    ContentComponent,
    FullComponent,
    MenuComponent,
    Page2Component,
    ProjecaoNomeadaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
