

const formatValue = (value: number | string | boolean) => {
    if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === "string") {
        return value.toUpperCase();
    } else {
        return !value;
    }
};





const getLength = (value: string | any[]) => {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
}




class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    getDetails() {
        return (`Name: ${this.name}, Age: ${this.age}`)
    }
}




type Item = {
    title: string,
    rating: number,
}

const filterByRating = (items: Item[]): Item[] => {
    const filterdItems = items.filter((item) => item.rating >= 4);
    return filterdItems;
};




type User = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
};

const filterActiveUsers = (users: User[]): User[] => {
    const activeUsers = users.filter((user: User) => user.isActive === true);
    return activeUsers;
}




interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
};

const printBookDetails = (book: Book) => {
    const availability = book.isAvailable ? "Yes" : "No";
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`)
};




type ArrayType = string | number[];

const getUniqueValues = (arr1: ArrayType, arr2: ArrayType) => {
    const combinedArray = [...arr1, ...arr2];
    const uniqeArray = new Set(combinedArray);
    return Array.from(uniqeArray);
}





type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const calculateTotalPrice = (products: Product[]) => {
    if (products.length === 0) {
        return 0;
    }

    return (
        products.map((product: Product) => {
            let total = product.price * product.quantity;

            if (product.discount) {
                const discountAmount = (total * product.discount) / 100;
                total -= discountAmount;
            }

            return total
        }).reduce((sum, current) => sum + current, 0)
    )
}