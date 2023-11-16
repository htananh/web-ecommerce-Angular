import { Component } from '@angular/core';
import { iphone } from 'src/Data/iphone';
import { samsung } from 'src/Data/samsung';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  iphone:any;
  samsung:any;
  ngOnInit(){
    this.iphone=iphone;
    this.samsung=samsung;
  }
  
}
