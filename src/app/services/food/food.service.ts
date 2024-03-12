import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[]{
    return [
      {
        id: 1,
        name: 'Tortalines',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['Pasta', 'Tortalines', 'Lunch'],
      },
      {
        id: 2,
        name: 'Brios',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['spain', 'italy'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['Breakfast', 'Desert'],
      },
      {
        id: 3,
        name: 'Lasagna',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['italy','germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Lasagna'],
      },
      {
        id: 4,
        name: 'Pizza',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['italy', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['Pizza', 'FastFood'],
      },
      {
        id: 5,
        name: 'Spageti',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['Pasta', 'Lunch'],
      },
      {
        id: 6,
        name: 'Macaroni',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['Pasta', 'Macaroni', 'Lunch'],
      },
    ];
  }
}
