import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEspecialidadeComponent } from './lista-especialidade.component';

describe('ListaEspecialidadeComponent', () => {
  let component: ListaEspecialidadeComponent;
  let fixture: ComponentFixture<ListaEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEspecialidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
