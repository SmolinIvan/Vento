import { FOOD_TYPE_TRANSLATIONS } from '../ui/constants';

export const translateDishCategory = (type: string): string => {
    return FOOD_TYPE_TRANSLATIONS[type] || type; // возвращаем исходный тип, если перевода нет
};
