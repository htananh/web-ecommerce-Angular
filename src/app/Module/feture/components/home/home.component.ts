import { Component } from '@angular/core';
import { iphone } from 'src/Data/iphone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  iphone:any;
  ngOnInit(){
    this.iphone=iphone;
  }

}
