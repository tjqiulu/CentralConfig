import { Component } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptionsArgs } from '@angular/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-modal-error',
  template: `
  <div class="modal fade rounded" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
       [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
    <div class="modal-dialog">

      <div class="modal-content" [ngStyle]="{'display': authenticationError ? 'none' : 'block'}">
        <div class="modal-header alert alert-danger fade in">
          <button type="button" class="close" (click)="hide()" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		      <h4 class="modal-title"><span class="action"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> <b>Error</b></span>
          
          </h4>
        </div>
         <div class="modal-body" [innerHTML]="title +'<br/> [Error code: '+error.code +'] ' + error.reason">
        </div>
        <div class="modal-footer">
         	<button type="button" class="btn btn-default pull-right" (click)="hide()">Close</button>
			  
        </div>
      </div>

      <div class="modal-content" [ngStyle]="{'display': authenticationError ? 'block' : 'none'}">
        <div class="modal-header alert alert-danger fade in">
		      <h4 class="modal-title"><span class="action glyphicon glyphicon-warning-sign"> {{title}}</span></h4>
        </div>
         <div class="modal-body">
          <table>
            <tr>
                <td>Username: </td><td><input type="text" #username/></td>
            </tr>
            <tr>
                <td>Password: </td><td><input type="password" #password /></td>
            </tr>
            </table>
        </div>
        <div class="modal-footer">
         	<button type="button" class="btn btn-default" (click)="login(username.value, password.value)">Login</button>
			  
        </div>
      </div>


    </div>
  </div>
  <div *ngIf="visible" class="modal-backdrop fade" [ngClass]="{'in': visibleAnimate}" (click)="hide()"></div>
  `
})



export class ModalErrorComponent {

  private visible = false;
  private authenticationError = false;
  private visibleAnimate = false;
  private title: String;
  private error: any={};

  constructor( private router: Router, private http: Http) {
 }
 

  public open(title: String, error: any) {
    console.log("open");
    console.log(error);
    if(error == null){
      return;
    }
    this.title = title;
    if (error.statusText){
     this.error={"title":"Connection error", "code":error.status, "reason":error.statusText};
    }
    else if(error.reason == "no authentication"){
      this.authenticationError = true;
      this.title = "Please login";
    }
    else{
     this.error = error;
    }
    this.show();
  }

  public close():void
  {
    this.hide();
  }

  private show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  private hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  login(username : string, password : string){
        const body = new URLSearchParams();
        body.set("j_username", username);
        body.set("j_password", password);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        console.error(body.toString());
this.http
      .post('j_security_check', body.toString(), {headers : headers})
      .toPromise()
      .then(response => {
          console.error(response.status + "==================")
          if(response.status != 403){
            this.hide();
              location.reload();
          }
      })
    }

 
}