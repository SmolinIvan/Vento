import pastaSVG from '../assets/svg/pasta.svg';
import burgerSVG from '../assets/svg/burger.svg';
import muffinSVG from '../assets/svg/muffin.svg';
import soupSVG from '../assets/svg/soup.svg';

export const DISH_CATEGORY_TRANSLATIONS: Record<string, string> = {
    bar: 'Бар',
    salads: 'Салаты',
    hot: 'Горячее',
    bakery: 'Выпечка и десерты',
    appetizers: 'Закуски',
    all: 'Все блюда',
    drinks: 'Напитки',
    // добавляем другие типы по мере необходимости
};

export type DishCategoryTranslated = keyof typeof DISH_CATEGORY_TRANSLATIONS;


export const DISH_CATEGORIES_IMAGES: Record<string, string> = {
    pasta: pastaSVG,
    dinner: burgerSVG,
    deserts: muffinSVG,
    soups: soupSVG,
};

