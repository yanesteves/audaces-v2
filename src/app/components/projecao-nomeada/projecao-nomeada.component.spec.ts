import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecaoNomeadaComponent } from './projecao-nomeada.component';

describe('ProjecaoNomeadaComponent', () => {
  let component: ProjecaoNomeadaComponent;
  let fixture: ComponentFixture<ProjecaoNomeadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjecaoNomeadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecaoNomeadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
