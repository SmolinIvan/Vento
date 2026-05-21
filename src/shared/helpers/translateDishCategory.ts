import { DISH_CATEGORY_TRANSLATIONS } from '../constants';

export const translateDishCategory = (type: string): string => {
    return DISH_CATEGORY_TRANSLATIONS[type] || type; // возвращаем исходный тип, если перевода нет
};
