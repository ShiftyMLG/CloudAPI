import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { favourite, PutReturn } from 'src/app/favourite';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  edit: boolean = false;
  response = undefined;
  search = undefined;
  searchIdInput : string;
  nameInput : string;

  @Input('place') place;
  @Output() reload = new EventEmitter();
  constructor(private square: ApiService) { }

  ngOnInit() {
  }

  Delete(Id : number){
    console.log("Deleting...")
    this.square.DeleteFavourite(Id).subscribe(
      (x) => {
        console.log(x);
        this.reload.emit(null);
      }
    )
  }
  Edit(){
    this.edit = !this.edit;
    console.log(this.edit)
  }

  SaveInput(Id : number){
    console.log(Id);
    console.log(this.nameInput);
    this.edit = false;
    const venue : PutReturn = {
      Name: this.nameInput,
      Id: Id
    }
    this.square.PutFavourite(Id, venue).subscribe(
      (x) => {
        console.log(x)
        this.reload.emit(null);
      }
    )
  }
  
}
