import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ModalComponent } from './modal.component';
import { ModalErrorComponent } from './modalError.component';
//import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ModalComponent,
    ModalErrorComponent
    
    
  ],
  providers: [
    
  ],
  exports:      [ ModalComponent,
    ModalErrorComponent ]
})
export class ComponentModule {}
