import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoPacienteComponent } from './atualizacao-paciente.component';

describe('AtualizacaoPacienteComponent', () => {
  let component: AtualizacaoPacienteComponent;
  let fixture: ComponentFixture<AtualizacaoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizacaoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
