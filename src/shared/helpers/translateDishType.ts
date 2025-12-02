import { FOOD_TYPE_TRANSLATIONS } from '../ui/constants';

export const translateFoodType = (type: string): string => {
    return FOOD_TYPE_TRANSLATIONS[type] || type; // возвращаем исходный тип, если перевода нет
};
