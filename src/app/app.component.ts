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
  routes: any[] = []

  constructor(private router: Router) {
    const routes = this.router.config

    routes.map(v => {
      if (v.path != '' && v.path != '**') {

        let icon = 'battery_unknown'
        switch(v.path) {
          case 'landing': icon = 'home';break;
          case 'notes': icon = 'people';break;
          case 'scan': icon = 'document_scanner';break;
          case 'summary': icon = 'summarize';break;
          case 'presentation': icon = 'co_present';break;
          case 'final': icon = 'weekend';break;            
        }

        this.routes.push({
          icon,
          page: v.path?.toUpperCase(),
          path: v.path,
          isActive: false
        })
      }
    })

    console.log("routes", this.routes)    
  }

  ngOnInit(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url
        

        const path = url.substring(1)
        console.log("navigation end url", path, path.length)

        this.routes.map(r => {
          r.isActive = false
        })

        if (path.length == 0) {
          this.routes[0].isActive = true
        } else {
          const routeObj = this.routes.find(val => val.path === path)
        
          if (routeObj) {
            routeObj.isActive = true
          }
        }

        console.log("routes on nav end", this.routes)
      }
    })
  }

  onMenuClick() {
    this.showLeftNav = !this.showLeftNav
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path)
  }
}
