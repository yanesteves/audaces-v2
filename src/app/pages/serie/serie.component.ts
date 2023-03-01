import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  eps = []
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  recebeEvento(event: any) {
    console.log('-- recebeu evento no pai --')
    console.log(event)
  }
  
}



