import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  navigateTo(cart:any){
    
  }
 
 
  @Output() isform = new EventEmitter<boolean>();
  Login(){
    const booleanValue = true;
    this.isform.emit(booleanValue);
  }
}
