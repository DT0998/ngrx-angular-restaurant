import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../shared/store/store.reducer';
import * as RecipesActions from '../shared/store/recipe/recipe.actions';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private store:Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new RecipesActions.FetchRecipes());
  }

}
