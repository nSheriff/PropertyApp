import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthserviceService } from '../../auth/service/authservice.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit, OnDestroy {

  isUserAuthenticated: any;
  userAuthSub: Subscription;
  @Output()sideNavCloseEvent = new EventEmitter<void>();

  constructor(private authService: AuthserviceService) { }

  ngOnInit() {
    this.userAuthSub = this.authService.userAuthEvent.subscribe(userStatus => {
      this.isUserAuthenticated = userStatus;
    });
  }

  ngOnDestroy(): void {
    this.userAuthSub.unsubscribe();
  }

  onCloseSideNav() {
    this.sideNavCloseEvent.emit();
  }

  onLogOut() {
    this.authService.Logout();
    this.onCloseSideNav();
  }

}
