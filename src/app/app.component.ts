import { Component } from '@angular/core';
import { Router, Route, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'automation-client-presentation';
  showLeftNav = false
  routes: Route[]

  constructor(private router: Router) {
    this.routes = this.router.config
    console.log("routes", this.routes)

    
  }

  ngOnInit(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url
        console.log("navigation end url", url)
      }
    })
  }

  onMenuClick() {
    this.showLeftNav = !this.showLeftNav
  }

  navigateTo() {
    
  }
}
