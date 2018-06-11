
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthserviceService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }
}
