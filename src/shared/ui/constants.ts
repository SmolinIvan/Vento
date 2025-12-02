export const FOOD_TYPE_TRANSLATIONS: Record<string, string> = {
    pasta: 'Паста',
    soups: 'Супы',
    dinner: 'Ужин',
    deserts: 'Десерты',
    breakfast: 'Завтрак',
    // добавляем другие типы по мере необходимости
};

export type FoodType = keyof typeof FOOD_TYPE_TRANSLATIONS;
