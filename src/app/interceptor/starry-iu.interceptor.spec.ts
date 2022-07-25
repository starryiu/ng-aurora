import { TestBed } from '@angular/core/testing';

import { StarryIuInterceptor } from './starry-iu.interceptor';

describe('StarryIuInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StarryIuInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StarryIuInterceptor = TestBed.inject(StarryIuInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
