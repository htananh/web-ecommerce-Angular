import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebBanHang';
  islogin:boolean = false;
  openForm(value : boolean){
    this.islogin=value;
  }
  closeLogin(){
    this.islogin=false;
  }
  form:any;
  constructor(fb:FormBuilder){
    this.form = fb.group({
      username: ['', [Validators.required,
      Validators.minLength(5)
    ]],
    password: ['',
    [ Validators.required, 
     Validators.minLength(5)]]
    });
  }
  closeForm(event: MouseEvent) {
    // Kiểm tra xem sự kiện click có xảy ra trong form-container hay không
    const isInsideFormContainer = (event.target as HTMLElement).closest('.form-container');
  
    // Nếu click bên ngoài form-container, đóng form
    if (!isInsideFormContainer) {
      this.closeLogin();
    }
  }
  
}
