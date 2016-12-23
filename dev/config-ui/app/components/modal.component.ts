import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  template: `
  <div class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
       [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header alert alert-info fade in">
          <button type="button" class="close" (click)="hide()" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		      <h4 class="modal-title"><span class="action">{{action}}</span>-<strong>{{name}}</strong></h4>
        </div>
        <div class="modal-body" [innerHTML]="description">
        </div>
        <div class="modal-footer">
         	<button type="button" class="btn btn-default" (click)="hide()">Cancel</button>
			    <button type="button" [disabled]="processing" class="btn btn-primary" (click)="doConfirm()"><span>Confirm</span>
    <i *ngIf="processing" class="fa fa-spinner fa-spin" ng-show="saving"></i></button>
        </div>
      </div>
    </div>
  </div>
  <div *ngIf="visible" class="modal-backdrop fade" [ngClass]="{'in': visibleAnimate}" (click)="hide()"></div>
  `
})



export class ModalComponent {

  private visible = false;
  private visibleAnimate = false;
  private action: String;
  private name: String;
  private description: String;
  private onConfirm: Function;
  private processing:boolean=false;


  public confirm(action: String, name: String, description: String, onConfirm: Function) {
    this.processing=false;
    this.action = action;
    this.name = name;
    this.description = description;
    this.onConfirm = onConfirm;
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

  private doConfirm(): void {
    this.processing=true;
    this.onConfirm();
  }


}