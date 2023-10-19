import { Component, HostListener, Input, ViewEncapsulation } from '@angular/core';
import SwiperCore,{Navigation,Pagination,EffectCoverflow} from 'swiper' 
SwiperCore.use([Navigation,Pagination,EffectCoverflow]);

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeProductComponent {
 @Input() product: any;
 
 isHovered: boolean = false;

 // Sử dụng @HostListener để lắng nghe sự kiện mouseleave
 @HostListener('mouseleave') onMouseLeave() {
   this.isHovered = true;
 }

}
