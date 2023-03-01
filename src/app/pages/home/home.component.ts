import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  parametroVar = 25;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoSerie() {
    this.router.navigate([`/serie/${this.parametroVar}`])
  }
}
