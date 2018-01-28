import {
  Component,
  OnInit
} from '@angular/core';

import {
  Router, NavigationEnd
} from '@angular/router';
import {
  ApiNav
} from '../../shared/api/api.nav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public routerLink = '/dashboard';

  public navs = ApiNav;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routerLink = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit() {}

}
