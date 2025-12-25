import pastaSVG from '../assets/svg/pasta.svg';
import burgerSVG from '../assets/svg/burger.svg';
import muffinSVG from '../assets/svg/muffin.svg';
import soupSVG from '../assets/svg/soup.svg';

export const DISH_CATEGORY_TRANSLATIONS: Record<string, string> = {
    pasta: 'Паста',
    soups: 'Супы',
    dinner: 'Ужин',
    deserts: 'Десерты',
    breakfast: 'Завтрак',
    all: 'Все блюда',
    // добавляем другие типы по мере необходимости
};

export type DishCategoryTranslated = keyof typeof DISH_CATEGORY_TRANSLATIONS;


export const DISH_CATEGORIES_IMAGES: Record<string, string> = {
    pasta: pastaSVG,
    dinner: burgerSVG,
    deserts: muffinSVG,
    soups: soupSVG,
};

