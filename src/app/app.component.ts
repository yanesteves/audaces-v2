import { Component } from '@angular/core';
import { EventEmitterService } from './services/event-emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto';

  ngOnInit(): void {
    EventEmitterService.get('verTrailer')
    .subscribe((value: any) => {
      alert('Um evento ver trailer foi chamado')
      console.log(value)
    })
  }

  ngOnDestroy() {
    EventEmitterService.get('verTrailer')
      .unsubscribe()
  }
}
