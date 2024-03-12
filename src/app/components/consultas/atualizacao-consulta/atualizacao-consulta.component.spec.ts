import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoConsultaComponent } from './atualizacao-consulta.component';

describe('AtualizacaoConsultaComponent', () => {
  let component: AtualizacaoConsultaComponent;
  let fixture: ComponentFixture<AtualizacaoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizacaoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
