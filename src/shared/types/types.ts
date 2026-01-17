export type DishCategory = 'drinks' | 'appetizers' | 'salads' | 'hot' | 'bakery' | 'bar';

type DishEnergy = {
  kcal: number;
  protein: number;
  fat: number;
  carbs: number;
}

export type DishType = {
  id: number;
  name: string;
  imageRef: string;
  energy: DishEnergy;
  type: DishCategory;
  price: number;
  description: string;
}

export type BasketDishType = DishType & {
    count: number;
};
