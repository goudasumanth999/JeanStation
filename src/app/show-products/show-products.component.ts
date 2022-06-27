import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  ProductName: any;

  constructor(private service:SharedService) { }

  ProductsList:any=[];

  ModalTitle:string | undefined;
  ActivateAddProductComp:boolean=false;
  product:any;
  ngOnInit(): void {
    this.refreshProductsList();
    
  }
addClick(){
  this.product={
    ProductId:0,
    ProductName:"",
    ProductPrice:"",
    ProductDescription:"",
    ProductStore:"",
    PhotoFileName:"anonymous.png"

  }
  this.ModalTitle="Add Product";
  this.ActivateAddProductComp=true;
  }
  editClick(){
    this.product="";
    this.ModalTitle="Edit product";
    this.ActivateAddProductComp=true;
  }
  deleteClick(){
    if(confirm('Are You Sure??')){
      this.service.deleteProducts(this.ProductName).subscribe(data=>{
        alert(data.toString());
        this.refreshProductsList();
      })
    }
  }

  closeClick(){
    this.ActivateAddProductComp=false;
    this.refreshProductsList();
  }

  refreshProductsList(){
    this.service.getProductsList().subscribe(data=>{
      this.ProductsList=data;

    });
  }

}

