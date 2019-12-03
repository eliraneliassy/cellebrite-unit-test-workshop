import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { fakeAsync, tick, flush } from '@angular/core/testing';

fdescribe('AsyncTests', () => {

    it('async test - set timout', (done: DoneFn) => {
        let flag = false;
        expect(flag).toBeFalsy();
        setTimeout(() => {
            flag = true;
            expect(flag).toBeTruthy();

            done();
        });

    });

    it('async test- observable', (done: DoneFn) => {
        let flag = false;
        expect(flag).toBeFalsy();
        of('asdasd').pipe(
            delay(1000)
        ).subscribe(() => {
            flag = true;
            expect(flag).toBeTruthy();
            done();
        });

    });

    it('async test - tick', fakeAsync(() => {
        let flag = false;
        expect(flag).toBeFalsy();

        setTimeout(() => {
            flag = true;


        }, 1000);
        tick(500);
        expect(flag).toBeFalsy();
        tick(500);
        expect(flag).toBeTruthy();


    }));

    it('async test - flush', fakeAsync(() => {
        let flag = false;
        expect(flag).toBeFalsy();

        setTimeout(() => {
            flag = true;


        }, 1000);

        flush();

        expect(flag).toBeTruthy();


    }));
});
