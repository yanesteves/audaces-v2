import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NomeModuloRoutingModule } from './nome-modulo-routing.module';
import { Pipe2Pipe } from './pipes/pipe2.pipe';


@NgModule({
  declarations: [
    Pipe2Pipe
  ],
  imports: [
    CommonModule,
    NomeModuloRoutingModule
  ]
})
export class NomeModuloModule { }
