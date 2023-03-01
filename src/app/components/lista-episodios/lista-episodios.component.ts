import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.scss']
})
export class ListaEpisodiosComponent implements OnInit {

  @Input('episodios') epsList = [];

  @Output("customEvent") customEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitirEvento() {
    console.log('-- emitindo evento --') 
     this.customEvent.emit("Clique no componente filho");
  }

  verTrailer() {
    EventEmitterService.get('verTrailer').emit('ver trailer')
    // EventEmitterService.get('verTrailer').emit(ep)
  }
}