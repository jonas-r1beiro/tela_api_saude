import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoMedicoComponent } from './atualizacao-medico.component';

describe('AtualizacaoMedicoComponent', () => {
  let component: AtualizacaoMedicoComponent;
  let fixture: ComponentFixture<AtualizacaoMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizacaoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
