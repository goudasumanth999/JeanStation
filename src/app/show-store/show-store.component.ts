import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-show-store',
  templateUrl: './show-store.component.html',
  styleUrls: ['./show-store.component.css']
  })
export class ShowStoreComponent implements OnInit {

  constructor(private service:SharedService) { }

  StoreList:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditStoreComp:boolean=false;
  store:any;
  ngOnInit(): void {
    this.refreshStoreList();
    
  }
addClick(){
  this.store={
    StoreId:0,
    StoreName:"",
    StoreLocation:""
  }
  this.ModalTitle="Add Store";
  this.ActivateAddEditStoreComp=true;
  }
  editClick(){
    this.store="";
    this.ModalTitle="Edit Store";
    this.ActivateAddEditStoreComp=true;
  }
  deleteClick(){
    if(confirm('Are You Sure??')){
      this.service.deleteStore(this.store).subscribe(data=>{
        alert(data.toString());
        this.refreshStoreList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditStoreComp=false;
    this.refreshStoreList();
  }

  refreshStoreList(){
    this.service.getStoreList().subscribe(data=>{
      this.StoreList=data;

    });
  }

}
