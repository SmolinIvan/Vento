import { DISH_CATEGORIES_IMAGES } from '../constants';

export const getDishCategotyImagePath = (category: string):string => {
    return DISH_CATEGORIES_IMAGES[category];
};
