import { Component,ElementRef,ViewChild } from '@angular/core';
import { PopoverModule } from "ng2-popover";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AppService} from './app.service'
import { PageInfo} from './app.model';
import { ModalComponent } from './components/modal.component';
import { ModalErrorComponent } from './components/modalError.component';
import { ParameterService } from './parameters/parameter.service';

import { Http, Headers, URLSearchParams, RequestOptionsArgs } from '@angular/http';

@Component({
  templateUrl: 'app/app.component.html',
  selector: 'my-app',
  providers: [ParameterService]
})

export class AppComponent {

  pageInfo:PageInfo;
  didScroll:boolean=false;
  lastScrollTop:number;

  @ViewChild('menu') menu:ElementRef;
  @ViewChild(ModalComponent) modalConfirm:ModalComponent;
  @ViewChild(ModalErrorComponent) modalError:ModalErrorComponent;
  
  constructor(private router: Router,private appService:AppService, private http: Http) {

    this.appService.event.subscribe(data => {
      this.pageInfo = data;
      console.log(data);
    });

    this.router.events
      .subscribe(this.routeChanged.bind(this));

   
       
  }

  ngOnInit() 
  {
    this.appService.modalConfirm=this.modalConfirm;
    this.appService.modalError=this.modalError;

    //window.addEventListener('scroll', (evt) => { this.didScroll = true; });

    // setInterval(() => {
    //     if (this.didScroll) {
    //         this.hasScrolled();
    //         this.didScroll = false;
    //     }
    // }, 250);

  }

  routeChanged(event: any) {
    if (event instanceof NavigationEnd) {
       console.log(this.router.routerState.snapshot);
    }
  }

  hasScrolled() {

        console.log("hasScrolled");
        let st = window.pageYOffset;
        let navbarHeight=this.menu.nativeElement.height;
        console.log(navbarHeight);
        // Make sure they scroll more than delta
        // if(Math.abs(this.lastScrollTop - st) <= 5)
        //     return;
        
        // // If they scrolled down and are past the navbar, add class .nav-up.
        // // This is necessary so you never see what is "behind" the navbar.
        // if (st > this.lastScrollTop && st > navbarHeight){
        //     this.navBarVisible=false;
        //     $('.navbar').removeClass('nav-down').addClass('nav-up');
        // } else {
        //     // Scroll Up
        //     if(st + window.outerHeight< $(document).height()) {
        //         this.navBarVisible=true;
        //     }
        // }
        
        // lastScrollTop = st;
    }

    logout(){
this.http
      .get('logout.jsp')
      .toPromise()
      .then(response => {
              this.router.navigate(['/login']);
      });
    }

    

}


