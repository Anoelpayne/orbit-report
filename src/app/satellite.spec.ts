import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite("1","2","3","4",true)).toBeTruthy();
  });
});
