import { TestBed } from '@angular/core/testing';

import { FilmOmdbProviderService } from './film-omdb-provider.service';

describe('FilmOmdbProviderService', () => {
  let service: FilmOmdbProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmOmdbProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
