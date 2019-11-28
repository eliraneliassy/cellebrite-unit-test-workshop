import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';

describe('MasterService', () => {

  const consoleMock = {
    log: () => { }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [

      ]
    });
    spyOn(window.console, 'log');
  });

  it('should be created', () => {
    const service: MasterService = TestBed.get(MasterService);
    expect(service).toBeTruthy();
  });

  it('should log the value', () => {
    const service: MasterService = TestBed.get(MasterService);
    const val = 'blabla';

    service.logValue(val);

    expect(window.console.log).toHaveBeenCalled();

  });
});
