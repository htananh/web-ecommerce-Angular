import { Component, ViewEncapsulation } from '@angular/core';
import { SlideBanner } from 'src/Data/slidebanner';
import SwiperCore,{Navigation,Pagination,EffectCoverflow,Autoplay} from 'swiper' 
SwiperCore.use([Navigation,Pagination,EffectCoverflow,Autoplay]);

@Component({
  selector: 'app-slide-banner',
  templateUrl: './slide-banner.component.html',
  styleUrls: ['./slide-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlideBannerComponent {
  slideBanner:any;
 
  ngOnInit() {
    this.slideBanner=SlideBanner;
  }
  

  
 
  
}
