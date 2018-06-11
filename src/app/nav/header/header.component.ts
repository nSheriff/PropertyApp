import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthserviceService } from '../../auth/service/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isUserAuthenticated = false;
  userAuthSub: Subscription;
  @Output()sideNavToggleEvent = new EventEmitter<void>();
  constructor(private authService: AuthserviceService) { }

  ngOnInit() {
    this.userAuthSub = this.authService.userAuthEvent.subscribe(userStatus => {
      this.isUserAuthenticated = userStatus;
    });
  }

  ngOnDestroy(): void {
    this.userAuthSub.unsubscribe();
  }

  onToggle() {
    this.sideNavToggleEvent.emit();
  }
  onLogOut() {
    this.authService.Logout();
  }
}
