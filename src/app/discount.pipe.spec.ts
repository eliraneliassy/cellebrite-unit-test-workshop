import { DiscountPipe } from './discount.pipe';

describe('DiscountPipe', () => {
  let pipe: DiscountPipe;

  beforeEach(() => {
    pipe = new DiscountPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should give a 10% discount if price is more than 10', () => {
    expect(pipe.transform(100, 10)).toEqual(90);
  });


});
