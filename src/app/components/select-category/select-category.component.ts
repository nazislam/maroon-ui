import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/categoryService/category-service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit {

  public categoryId: string = '';
  public categoryName: string = '';
  public userId: string = '';
  public categories: any = [];

  constructor(
    private categoryService: CategoryService,
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log('categories are', this.categories);
    });
  }

  public onSubmit(categories: any) {
    let selectedCategories: any = [];
    let reqPayLoad = {
      "userInfo": {},
      "categories": []
    };
    categories.forEach((category: { checked: any; }) => {
      if (category.checked) {
        selectedCategories.push(category);
      }
    });
    console.log('--> selectedCategories', selectedCategories);
    let userEmail = sessionStorage.getItem('userEmail');
    reqPayLoad.userInfo = { "email": userEmail };
    reqPayLoad.categories = selectedCategories;
    this.userService.updateCategories(reqPayLoad).subscribe((response: any) => {
      console.log('response', response);
    });
  }
  
}
