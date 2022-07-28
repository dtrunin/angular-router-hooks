import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad,
    Route,
    RouterStateSnapshot,
    UrlSegment,
    UrlTree
} from '@angular/router';
import {delay, map, Observable, of, tap} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppGuard implements CanActivate, CanActivateChild, CanLoad {
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.doCanActivate(route, state, `canActivate`);
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.doCanActivate(childRoute, state, `canActivateChild`);
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log(`canLoad-${route.data.meta} called`, route, segments);
        return of(true).pipe(
            delay(2000),
            tap(() => console.log(`canLoad-${route.data.meta} finished`)),
            map(() => true));
    }

    private doCanActivate(route: ActivatedRouteSnapshot,
                          state: RouterStateSnapshot, hook: string): Observable<boolean | UrlTree> {
        console.log(`${hook}-${route.data.meta} called`, route, state);
        return of(true).pipe(
            delay(2000),
            tap(() => console.log(`${hook}-${route.data.meta} finished`)),
            map(() => true));
    }
}
