import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProvinceService } from 'src/app/services/province-service.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent  {
  myform: FormGroup;
  provinces: any[] = [];
  districts: any[] = [];
  wards: any[] = [];
  result: string = '';
  constructor(fb: FormBuilder, private apiService: ProvinceService,private router: Router) {
    this.myform = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern(/^-?\d*\.?\d*$/)]],
      streetAddress: ['', Validators.required],
      provinces: [null, Validators.required],
      district: ['', Validators.required],
      ward: ['', Validators.required],
       province: [''] 
    });
  }

  ngOnInit() {
    this.apiService.callAPI(1).subscribe((data) => {
      this.provinces = data;
      console.log(this.provinces);
    });
  }
  selectedProvince: string | null = null;

  onProvinceChange() {
   
    
   
    const provinceCode = this.myform.get('provinces')?.value;
    console.log('Selected Province:', provinceCode);
  
    
    this.apiService.callApiDistrict(provinceCode).subscribe((data) => {
      this.districts = data.districts;
      console.log(this.districts);
      
      this.wards = []; // Reset wards when province changes
      this.printResult();
    });
  }

  onDistrictChange() {
    const districtCode = this.myform.get('district')?.value;
    console.log('Selected districtCode:', districtCode);
    // const districtCode = (document.getElementById('district') as HTMLSelectElement).value;
    this.apiService.callApiWard(districtCode).subscribe((data) => {
      this.wards = data.wards;
      this.printResult();
    });
  }

  onWardChange() {
    this.printResult();
  }

  printResult() {
    const provinceText = this.getSelectedOptionText('#province');
    const districtText = this.getSelectedOptionText('#district');
    const wardText = this.getSelectedOptionText('#ward');
  
    if (districtText && provinceText && wardText) {
      this.result = `${provinceText} | ${districtText} | ${wardText}`;
    }
  }
  
  private getSelectedOptionText(selector: string): string {
    const selectedOption = document.querySelector(`${selector} option:checked`);
    return selectedOption ? (selectedOption.textContent || '') : '';
  }
  navigatoCart(){
    this.router.navigate(['cart']);
  }
  
}

