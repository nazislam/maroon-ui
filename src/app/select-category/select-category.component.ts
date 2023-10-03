import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent {

  public categoryList = [
    { categoryId: "CAP", categoryName: "Professional growth", userId: "4980" },
    { categoryId: "SLO", categoryName: "Social Life", userId: "2350" },
    { categoryId: "WES", categoryName: "Spiritual Growth", userId: "5081" }
  ]

  public categoryId: string = '';
  public categoryName: string = '';
  public userId: string = '';

  // public selectCategForm = new FormGroup({
  //   categoryId: new FormControl(''),
  //   categoryName: new FormControl(''),
  //   userId: new FormControl(''),
  // });

  public onSubmit() {
    console.log('clicking onSubmit()');
  }
  
}
