import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkThemeToggleComponent } from './dark-theme-toggle.component';

describe('DarkThemeToggleComponent', () => {
  let component: DarkThemeToggleComponent;
  let fixture: ComponentFixture<DarkThemeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkThemeToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkThemeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
