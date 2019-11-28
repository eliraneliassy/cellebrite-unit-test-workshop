import { MasterService } from './master.service';
import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;

  const masterServiceMock = {
    logValue: () => { }
  };

  beforeEach(() => {
    spyOn(masterServiceMock, 'logValue');
    service = new CalcService(masterServiceMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add 2 numbers', () => {
    const a = 2;
    const b = 3;

    const res = service.plus(a, b);

    expect(masterServiceMock.logValue).toHaveBeenCalledTimes(1);
    expect(res).toEqual(5);
  });
});
