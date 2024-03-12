import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEspecialidadeComponent } from './menu-especialidade.component';

describe('MenuEspecialidadeComponent', () => {
  let component: MenuEspecialidadeComponent;
  let fixture: ComponentFixture<MenuEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEspecialidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
