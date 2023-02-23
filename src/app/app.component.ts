import { Component } from '@angular/core';
import { Router, Route, NavigationEnd, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'automation-client-presentation';
  toolbarHidden = false
  showLeftNav = false
  showRightNav = false
  routes: any[] = []

  constructor(private router: Router, private route: ActivatedRoute) {
    const routes = this.router.config

    const skipList = ['landing','login','', '**']
    routes.map(v => {
      const skipThis = skipList.some(p => p === v.path)
      if (!skipThis) {

        let icon = 'battery_unknown'
        switch(v.path) {
          case 'landing': icon = 'home';break;
          case 'meet-notes': icon = 'people';break;
          case 'slides': icon = 'slideshow';break;
          case 'test-cases': icon = 'medical_information';break;
          case 'videos': icon = 'video_collection';break;
          case 'final': icon = 'weekend';break;            
        }

        const page = ((v.path?.charAt(0).toUpperCase() || '' )+ v.path?.substring(1)).replace(/-/g, ' ')
        this.routes.push({
          icon,
          page,
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

        this.toolbarHidden = path.indexOf('(global:login)') > -1 ? true : false
        console.log("navigation end url", path, path.length,  this.toolbarHidden)

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

  onNotify() {
    this.showRightNav = !this.showRightNav
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path)
  }

  logOut() {
    const navigationExtras: NavigationExtras = {
      // relativeTo: this.route,
      // queryParams: { id: 123 },
      // state: { data: 'some data' }
    };
    this.router.navigate([{ outlets: { global: ['login'] } }], navigationExtras);
  }
}
