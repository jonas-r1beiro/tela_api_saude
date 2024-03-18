import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVisaoPacienteComponent } from './menu-visao-paciente.component';

describe('MenuVisaoPacienteComponent', () => {
  let component: MenuVisaoPacienteComponent;
  let fixture: ComponentFixture<MenuVisaoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVisaoPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuVisaoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
