import { Film } from './film';

describe('Film', () => {
  it('should create an instance', () => {
    expect(new Film('','',0)).toBeTruthy();
  });
});
