export type DishCategory = 'drinks' | 'appetizers' | 'salads' | 'hot' | 'bakery' | 'bar';

export type DishEnergy = {
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
  available: boolean;
}

export type BasketDishType = DishType & {
    count: number;
};

export type NewDish = {
    name: string;
    type: DishCategory,
    energy: DishEnergy,
    price: number;
    description: string;
    imageRef: string;
    available: boolean;
};
