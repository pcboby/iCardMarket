import {
  Component,
  OnInit
} from '@angular/core';

import {
  Router,
  NavigationEnd,
  NavigationStart
} from '@angular/router';
import { LoaderService } from '../../core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private router: Router, private loader: LoaderService) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.loader.isLoad = true;
      }
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects);
        this.loader.isLoad = false;
      }
    });
  }

  ngOnInit() {}

}
