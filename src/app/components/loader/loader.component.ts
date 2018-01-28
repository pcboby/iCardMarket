import {
  Component,
  OnInit
} from '@angular/core';

import {
  Router, NavigationEnd
} from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd){
        console.log(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit() {}

}
