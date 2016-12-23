import {Component} from '@angular/core';

@Component({
    selector: 'loading-indicator',
    template: `
     <div style="margin-left:45%; margin-top:10%;"> 
     <!-- <div style="text-align:center; vertical-align:middle;"> -->
       <!--   <span><i class="fa fa-spinner fa-pulse fa-fw fa-5x"></i></span>-->
        <div class="loader"></div> 
        <!-- <div class="loading">Loading&#8230;</div>-->
     </div> 
    `
})
export class LoadingIndicator {}
// export class LoadingPage {
//     public loading: boolean;
//     constructor(val: boolean) {
//         this.loading = val;
//     }
//     standby() {
//         this.loading = true;
//     }
//     ready() {
//         this.loading = false;
//     }
// }