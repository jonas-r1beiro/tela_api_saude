import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConsultasPacienteComponent } from './lista-consultas-paciente.component';

describe('ListaConsultasPacienteComponent', () => {
  let component: ListaConsultasPacienteComponent;
  let fixture: ComponentFixture<ListaConsultasPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaConsultasPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaConsultasPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
