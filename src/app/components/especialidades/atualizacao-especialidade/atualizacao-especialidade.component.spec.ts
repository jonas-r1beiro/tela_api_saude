import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoEspecialidadeComponent } from './atualizacao-especialidade.component';

describe('AtualizacaoEspecialidadeComponent', () => {
  let component: AtualizacaoEspecialidadeComponent;
  let fixture: ComponentFixture<AtualizacaoEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoEspecialidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizacaoEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
