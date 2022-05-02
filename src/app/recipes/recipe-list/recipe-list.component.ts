import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A Test Recipe','This is simply a test','https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-720x513.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-720x513.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
