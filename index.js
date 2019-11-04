class Product {
    constructor(name, calories) {
        this.title = name;
        this.calories = calories;
    }
}

class Dish {
    constructor(name) {
        this.title = name;
        this.products = [];
    }

    addProduct(name, weight) {
        this.products.push({name, weight});
    }
}

class CaloriesCalculator {
    constructor() {
        this.dishes = [];
    }

    addDish(dish) {
        this.dishes.push(dish);
    }

    countCalories(product) {
        return (product.name.calories/100) * product.weight;
    }

    countDishCal(dish) {
        return dish.products
            .reduce((acc, cur) => acc + this.countCalories(cur), 0);
    }



    getTotalCalories() {
        return this.dishes
            .reduce((acc, cur) => acc + this.countDishCal(cur), 0);
    }

    dishInf(dish) {
        const calories = this.countDishCal(dish);
        console.log(`${dish.title} - 1 порция, ${calories} ккал. :\n`);
        dish.products.forEach((product) => {
            console.log(
                `${product.name.title},`,
                `${product.weight} гр.,`,
                `${this.countCalories(product)} ккал.;`
            )
        });
        console.log('= = = = = = = = = = = = = = = = = =')
    }

    getAllDishesInfo() {
        this.dishes.forEach((dish) => {
            this.dishInf(dish);
        });
    }
}


const meat = new Product('Филе говядина', 158);

const rice = new Product('Рис', 130);

const onion = new Product('Лук', 40);

const carrot = new Product('Морковь', 41);



const plov = new Dish('Плов');

plov.addProduct(meat, 100);

plov.addProduct(rice, 150);

plov.addProduct(onion, 25);

plov.addProduct(carrot, 25);



const calculator = new CaloriesCalculator();

calculator.addDish(plov);

const calories = calculator.getTotalCalories();

const totals = calculator.getAllDishesInfo();