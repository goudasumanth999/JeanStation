import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-edit-store',
  templateUrl: './add-edit-store.component.html',
  styleUrls: ['./add-edit-store.component.css']
})
export class AddEditStoreComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() store:any;
  StoreId:string | undefined;
  StoreName:string | undefined;
  StoreLocation:string | undefined;
  

  ngOnInit(): void {
    this.StoreId=this.store.StoreId;
    this.StoreName=this.store.StoreName;
    this.StoreLocation=this.store.StoreLocation;
  }
  addStore(){
    var val={StoreId:this.StoreId,
              StoreName:this.StoreName,
              StoreLocation:this.StoreLocation};
    this.service.addStore(val).subscribe(res=>{
      alert(res.toString());
    });

  }
  updateStore(){
    var val={StoreId:this.StoreId,
      StoreName:this.StoreName,
      StoreLocation:this.StoreLocation};
this.service.updateStore(val).subscribe(res=>{
alert(res.toString());
});

  }

}
