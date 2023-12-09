import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import SwiperCore,{Navigation,Pagination,EffectCoverflow,Autoplay} from 'swiper' 
SwiperCore.use([Navigation,Pagination,EffectCoverflow,Autoplay]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  

}
