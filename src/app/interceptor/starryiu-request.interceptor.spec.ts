import { TestBed } from '@angular/core/testing';

import { StarryiuRequestInterceptor } from './starryiu-request.interceptor';

describe('StarryiuRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StarryiuRequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StarryiuRequestInterceptor = TestBed.inject(StarryiuRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
