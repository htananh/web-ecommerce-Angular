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
    this.slideBanner = SlideBanner;
  
    // Kiểm tra dung lượng của ảnh trong SlideBanner
    this.slideBanner.forEach((image: any) => {
      this.getImageSize(image.image)
        .then((sizeInKB) => {
          console.log(`Dung lượng ảnh: ${sizeInKB} KB`);
        })
        .catch((error) => {
          console.log(`Lỗi khi lấy dung lượng ảnh: ${error}`);
        });
    });
  }
  
  getImageSize(url: string): Promise<number> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
  
      img.onload = () => {
        const fileSizeInKB = Math.round((img.src.length / 1024)); // 1 byte = 1024 bytes
        resolve(fileSizeInKB);
      };
  
      img.onerror = (error) => {
        reject(error);
      };
    });
  }
  
  

  
 
  
}
