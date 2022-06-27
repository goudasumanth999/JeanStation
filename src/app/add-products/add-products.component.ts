import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() product:any;
  ProductId:string | undefined;
  ProductName:string | undefined;
  ProductPrice:string | undefined;
  ProductDescription:string | undefined;
  ProductStore:string | undefined;
  PhotoFileName:string | undefined;
  PhotoFilePath:string | undefined;
  
  StoreList:any=[]

  ngOnInit(): void {
    this.loadStoreList();
  }
  loadStoreList(){
    this.service.getAllStoreNames().subscribe((data:any)=>{
      this.StoreList=data;

      this.ProductId=this.product.ProductId,
      this.ProductName=this.product.ProductName,
      this.ProductPrice=this.product.ProductPrice,
      this.ProductDescription=this.product.ProductDescription,
      this.ProductStore=this.product.ProductStore,
      this.PhotoFileName=this.service.PhotoUrl+this.PhotoFileName,
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }


  addproducts(){
    var val={ProductId:this.ProductId,
      ProductName:this.ProductName,
      ProductPrice:this.ProductPrice,
      ProductDescription:this.product.ProductDescription,
      ProductStore:this.product.ProductStore,
      PhotoFileName:this.product.PhotoFileName
    };
    this.service.addProducts(val).subscribe(res=>{
      alert(res.toString());
    });

  }
  updateproducts(){
    var val={ProductId:this.ProductId,
      ProductName:this.ProductName,
      ProductPrice:this.ProductPrice,
      ProductDescription:this.product.ProductDescription,
      ProductStore:this.product.ProductStore,
      PhotoFileName:this.product.PhotoFileName};
this.service.updateProducts(val).subscribe(res=>{
alert(res.toString());
});

  }
  UploadPhoto(event: { target: { files: any[]; }; }){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.service.UploadPhoto(formData).subscribe()

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.tostring();
      this.PhotoFileName=this.service.PhotoUrl+this.PhotoFileName;
    })
  }
   
  
}
