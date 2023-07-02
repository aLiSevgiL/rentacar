import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service'; // BrandService import edildi

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  currentBrand:Brand ;

  constructor(private brandService: BrandService) {} // HttpClient yerine BrandService enjekte edildi

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(): void {
    this.brandService.getBrands().subscribe((response) => { // brandService kullanıldı
      this.brands = response.data;
    });
  }

  setCurrentBrand(brand:Brand){
   this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if (brand==this.currentBrand){
       return "list-group-item-active"
    }
    else 
    return "list-group-item"
  }



}
