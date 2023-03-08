import { AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CondicaoService } from 'src/app/services/condicao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  parametroVar: number = 24;
  // nome: string = 'João'

  email: string = "yan.m.esteves@gmail.com"

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log('ngonint')
  }

  gotoSerie() {
    this.router.navigate([`/serie/${this.parametroVar}`])
  }

  ngOnDestroy() {
    console.log('ngondestroy')
  }

  condition() {
    return true;
  }

  aumentar() {
    this.tamanhoFonte += 10;
  }

  diminuirFonte() {
    this.tamanhoFonte -= 10;
  }

  aumentarFonte() {
    this.tamanhoFonte += 10;
  }

  tamanhoFonte = 30;
  obterEstilo() {
    return {
      'font-size': this.tamanhoFonte + 'px', // 30px
    };
  }
}
