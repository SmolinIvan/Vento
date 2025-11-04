import { Dish } from '@/ui/menu-itemUI/MenuItemUI';

export type DishWithCategory = Dish;

export const DISHES: DishWithCategory[] = [
    {
        name: 'Паста арабьята',
        imageRef: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Arrabiata-Pasta-square-FS-600x900.jpg',
        type: 'pasta',
        energy: {
            kcal: 0,
            protein: 0,
            fat: 0,
            carbs: 0,
        },
    },
    {
        name: 'Рамен',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Beef_ramen_-_Sun_Noodle%2C_Kailua%2C_Oahu.jpg',
        type: 'soups',
        energy: {
            kcal: 450,
            protein: 20,
            fat: 15,
            carbs: 60,
        },
    },
    {
        name: 'Цезарь',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Caesar_salad_%281%29.jpg/1280px-Caesar_salad_%281%29.jpg',
        type: 'dinner',
        energy: {
            kcal: 350,
            protein: 12,
            fat: 25,
            carbs: 20,
        },
    },
    {
        name: 'Борщ',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Borscht_served.jpg/1280px-Borscht_served.jpg',
        type: 'soups',
        energy: {
            kcal: 150,
            protein: 8,
            fat: 5,
            carbs: 20,
        },
    },
    {
        name: 'Пельмени',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pelmeni_Russian.jpg/1280px-Pelmeni_Russian.jpg',
        type: 'dinner',
        energy: {
            kcal: 280,
            protein: 15,
            fat: 10,
            carbs: 35,
        },
    },
    {
        name: 'Пицца Маргарита',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/1280px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        type: 'dinner',
        energy: {
            kcal: 800,
            protein: 30,
            fat: 25,
            carbs: 120,
        },
    },
    {
        name: 'Тирамису',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tiramisu_with_blueberries_and_raspberries%2C_July_2011.jpg/1280px-Tiramisu_with_blueberries_and_raspberries%2C_July_2011.jpg',
        type: 'deserts',
        energy: {
            kcal: 450,
            protein: 10,
            fat: 25,
            carbs: 45,
        },
    },
    {
        name: 'Гуакамоле',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Guacamole_%28cropped%29.jpg/1280px-Guacamole_%28cropped%29.jpg',
        type: 'dinner',
        energy: {
            kcal: 200,
            protein: 3,
            fat: 18,
            carbs: 10,
        },
    },
    {
        name: 'Такос',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1280px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg',
        type: 'dinner',
        energy: {
            kcal: 180,
            protein: 10,
            fat: 8,
            carbs: 18,
        },
    },
    {
        name: 'Пад Тай',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1280px-Phat_Thai_kung_Chang_Khien_street_stall.jpg',
        type: 'dinner',
        energy: {
            kcal: 400,
            protein: 15,
            fat: 12,
            carbs: 60,
        },
    },
    {
        name: 'Стейк',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Beef_fillet_steak_with_mushroom_sauce.jpg/1280px-Beef_fillet_steak_with_mushroom_sauce.jpg',
        type: 'dinner',
        energy: {
            kcal: 600,
            protein: 45,
            fat: 45,
            carbs: 2,
        },
    },
    {
        name: 'Фалафель',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Falafel_balls.jpg/1280px-Falafel_balls.jpg',
        type: 'dinner',
        energy: {
            kcal: 350,
            protein: 13,
            fat: 18,
            carbs: 35,
        },
    },
    {
        name: 'Салат Греческий',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Greek_salad_%28cropped%29.jpg/1280px-Greek_salad_%28cropped%29.jpg',
        type: 'dinner',
        energy: {
            kcal: 250,
            protein: 8,
            fat: 20,
            carbs: 10,
        },
    },
    {
        name: 'Шаурма',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Chicken_Shawarma_1_%2848713625551%29.jpg/1280px-Chicken_Shawarma_1_%2848713625551%29.jpg',
        type: 'dinner',
        energy: {
            kcal: 550,
            protein: 25,
            fat: 30,
            carbs: 45,
        },
    },
    {
        name: 'Оливье',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Salad_Olivier.jpg/1280px-Salad_Olivier.jpg',
        type: 'dinner',
        energy: {
            kcal: 200,
            protein: 7,
            fat: 12,
            carbs: 15,
        },
    },
    {
        name: 'Блины',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Oladi_with_condensed_milk.jpg/1280px-Oladi_with_condensed_milk.jpg',
        type: 'breakfast',
        energy: {
            kcal: 220,
            protein: 7,
            fat: 8,
            carbs: 30,
        },
    },
    {
        name: 'Сырники',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Syrniki_white_bg.jpg/1280px-Syrniki_white_bg.jpg',
        type: 'breakfast',
        energy: {
            kcal: 280,
            protein: 18,
            fat: 12,
            carbs: 25,
        },
    },
    {
        name: 'Панна Котта',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Panna_cotta_ai_frutti_di_bosco.JPG/1280px-Panna_cotta_ai_frutti_di_bosco.JPG',
        type: 'deserts',
        energy: {
            kcal: 320,
            protein: 6,
            fat: 25,
            carbs: 22,
        },
    },
    {
        name: 'Хачапури по-аджарски',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Khachapuri_000.jpg/1280px-Khachapuri_000.jpg',
        type: 'breakfast',
        energy: {
            kcal: 650,
            protein: 25,
            fat: 30,
            carbs: 70,
        },
    },
    {
        name: 'Самоса',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Samosachutney.jpg/1280px-Samosachutney.jpg',
        type: 'dinner',
        energy: {
            kcal: 300,
            protein: 8,
            fat: 15,
            carbs: 35,
        },
    },
    {
        name: 'Бургер',
        imageRef: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1280px-Cheeseburger.jpg',
        type: 'dinner',
        energy: {
            kcal: 750,
            protein: 35,
            fat: 40,
            carbs: 55,
        },
    },
];
