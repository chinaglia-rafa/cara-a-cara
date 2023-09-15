import { TestBed } from '@angular/core/testing';

import { LightDarkThemeService } from './light-dark-theme.service';

describe('LightDarkThemeService', () => {
  let service: LightDarkThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightDarkThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
