import { fashionDB } from './fashionDB';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FeedService } from './feed.service';

describe('FeedService', () => {

  let service: FeedService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(FeedService);
    httpTestingController = TestBed.get(HttpTestingController);
  }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get feed with params', () => {
    const mockDB = fashionDB;

    service.getFeed(0, 'fashion').subscribe((res) => {

      expect(res).toBeTruthy();
      expect(res.length).toEqual(mockDB.length);
      expect(res[0]._id).toEqual(mockDB[0]._id);

    });

    const req = httpTestingController
      .expectOne('https://api.fashbash.co/api/feed?page=0&categories=fashion');

    expect(req.request.method).toEqual('GET');

    req.flush(mockDB);

    httpTestingController.verify();

  });

});
