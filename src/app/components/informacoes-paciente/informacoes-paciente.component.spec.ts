import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesPacienteComponent } from './informacoes-paciente.component';

describe('InformacoesPacienteComponent', () => {
  let component: InformacoesPacienteComponent;
  let fixture: ComponentFixture<InformacoesPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacoesPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacoesPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
