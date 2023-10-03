import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../services/categoryService/category-service';

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
    private categoryService: CategoryService
  ) {

  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log('categories are', this.categories);
    });
  }

  // public selectCategForm = new FormGroup({
  //   categoryId: new FormControl(''),
  //   categoryName: new FormControl(''),
  //   userId: new FormControl(''),
  // });

  public onSubmit(categories: any) {
    console.log('clicking onSubmit()', JSON.stringify(categories));
    let selectedCategories: any = [];
    categories.forEach((category: { checked: any; }) => {
      if (category.checked) {
        selectedCategories.push(category);
      }
    });
    this.categoryService.saveCategories(selectedCategories);
  }
  
}
