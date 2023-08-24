import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent{

    recipes: Recipe[] = [
        new Recipe('Salt','It is too salty','image1'),
        new Recipe('Sugar','So sweet','image2')
    ];

    constructor(){}

    ngOnInit(){

    }

    public addNewRecipe(e: any){
        // for(let i = 0; i < e.length; i++){
        //     this.recipes.push(new Recipe(
        //         name = e.name,
        //         desc = e.description,
        //         imagePath = e.imagePath
        //     ));
        // }
    }
}