//1 Problem: Create a Person class with properties name, age, and gender. Initialize the class with a constructor.

class Person{
    name : string;
    age : string;
    gender : string;

    constructor(name : string, age : string, gender : string){
        this.name = name
        this.age = age
        this.gender = gender
    }
}

const person = new Person("safin", "24", "male")
//console.log(person)
//console.log(person)

//2.Problem 2: Implement Inheritance
//2.Problem: Create a Student class that extends the Person class. Add a property studentId to the Student class.

class Student extends Person{
    studentId : number;

    constructor(name : string, age : string , gender : string, studentId : number){
        super(name, age, gender);
        this.studentId = studentId;
    }
}

const student1 = new Student("Nur", "23", "female", 232323)
const student2 = new Student("Nur", "23", "female", 232323)
//console.log(student1)
//console.log(student2)


//Problem-2 : Create an interface Animal with methods eat and sleep. Implement this interface in a Dog class.


interface Animal{
    eat() : void;
    sleep() : void;
}

class Dog implements Animal{
   
    eat() : void{
        console.log("Dog is eating")
    }

    sleep(): void {
        console.log("Dog is sleeping")
    }
}

const dog1 = new Dog()

dog1.eat()
dog1.sleep()

//Problem 4 ---  Modify the Person class to accept optional parameters in the constructor.

class Info{
    name : string;
    age? : number;
    gender? : string;
    constructor(name : string, age : number, gender : string){
        this.name = name
        this.age = age
        this.gender = gender
    }

    getInfo(){
        console.log(`My name is ${this.name}, I am ${this.age} years old and I am ${this.gender}`)
    }
}

const info1 = new Info("Hasibur Rahman Safin", 24, "male")
//console.log(info1)


//Problem 5 --- Create a Car class with a private property speed. Implement getter and setter methods to access and modify speed.

class Car{
    private _speed : number;

    constructor( _speed : number){
        this._speed = _speed
    }

    get speed() : number {
       return this._speed
    }

    set speed(value : number)  {
        if(value < 0){
            throw new Error("Something is wrong")
        }

        this._speed = value
    }
}


const car1 = new Car(50)


//Problem 6 ---- Implement a singleton class Database that can only have one instance.


class Database {
    private static instance: Database;

    private constructor() {}

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    connect(): void {
        console.log("Connected to the database");
    }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2);  // Output: true


//problem7 ----  Simulate constructor overloading in TypeScript by using optional parameters.

class Point2{
    x: number;
    y: number;

    constructor(x: number, y?: number) {
        this.x = x;
        this.y = y ?? 0;  // If y is undefined, set to 0
    }
}

const point1 = new Point2(5);
const point2 = new Point2(3, 4);
console.log(point1, point2);

//Problem8 ---- Create an abstract class Vehicle with an abstract method move. Create Bike and Car classes that implement move.

abstract class Vehicle {
    abstract move(): void;
}

class Bike extends Vehicle {
    move(): void {
        console.log("Bike is moving");
    }
}

class Car2 extends Vehicle {
    move(): void {
        console.log("Car is moving");
    }
}

const bike = new Bike();
const car3 = new Car2();
bike.move();
car3.move();

//Problem10 --- Create a class Book with a title property that is readonly.

class Book {
    readonly title: string;

    constructor(title: string) {
        this.title = title;
    }
}

const book = new Book("The Great Gatsby");
console.log(book.title);
// book.title = "New Title";  // Error: Cannot assign to 'title' because it is a read-only property


//Problem11 -- Create an enum Color and use it in a Car class.

enum Color {
    Red,
    Green,
    Blue
}

class Car4 {
    color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    describe(): void {
        console.log(`This car is ${Color[this.color]}`);
    }
}

const myCar = new Car4(Color.Red);
myCar.describe();

//Problem12 --- 

// Define the Entity interface
interface Entity {
    id: number;
}

// Create a generic Repository class
class Repository<T extends Entity> {
    private items: T[] = [];

    // Create a new entity (Add)
    create(item: T): void {
        this.items.push(item);
        console.log(`${item.constructor.name} created:`, item);
    }

    // Read or retrieve an entity by ID
    read(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }

    // Update an existing entity
    update(item: T): void {
        const index = this.items.findIndex(i => i.id === item.id);
        if (index !== -1) {
            this.items[index] = item;
            console.log(`${item.constructor.name} updated:`, item);
        } else {
            console.log(`${item.constructor.name} with ID ${item.id} not found.`);
        }
    }

    // Delete an entity by ID
    delete(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
        console.log(`Entity with ID ${id} deleted.`);
    }

    // Get all entities
    getAll(): T[] {
        return this.items;
    }
}

// Define the User class that implements the Entity interface
class User implements Entity {
    constructor(public id: number, public name: string, public email: string) {}
}

// Define the Product class that implements the Entity interface
class Product implements Entity {
    constructor(public id: number, public name: string, public price: number) {}
}

// Define the Order class that implements the Entity interface
class Order implements Entity {
    constructor(public id: number, public productId: number, public quantity: number) {}
}

// Create repository instances for different entity types
const userRepository = new Repository<User>();
const productRepository = new Repository<Product>();
const orderRepository = new Repository<Order>();

// Adding entities
userRepository.create(new User(1, "Alice", "alice@example.com"));
userRepository.create(new User(2, "Bob", "bob@example.com"));

productRepository.create(new Product(1, "Laptop", 1200));
productRepository.create(new Product(2, "Phone", 800));

orderRepository.create(new Order(1, 1, 2)); // 2 Laptops
orderRepository.create(new Order(2, 2, 3)); // 3 Phones

// Retrieve a user by ID
const user = userRepository.read(1);
console.log("Read User:", user);

// Update a user
const updatedUser = new User(1, "Alice Smith", "alice.smith@example.com");
userRepository.update(updatedUser);

// Delete a product
productRepository.delete(2);

// Get all orders
const allOrders = orderRepository.getAll();
console.log("All Orders:", allOrders);


//Problem15 --- Create a ShoppingCart class that can add Product objects. Implement a discount mechanism that applies a percentage discount to the total price.

class Product2 {
    constructor(public name: string, public price: number) {}
}

class ShoppingCart {
    private products: Product[] = [];
    private discount: number = 0;  // percentage

    addProduct(product: Product): void {
        this.products.push(product);
    }

    applyDiscount(discount: number): void {
        this.discount = discount;
    }

    getTotalPrice(): number {
        const total = this.products.reduce((sum, product) => sum + product.price, 0);
        return total - (total * this.discount / 100);
    }
}

const cart = new ShoppingCart();
//cart.addProduct(new Product("Laptop", 1000));
//cart.addProduct(new Product("Phone", 500));
cart.applyDiscount(10);
console.log(cart.getTotalPrice());  // Output: 1350



//problem 16 


class Book5 {
    constructor(public title: string, public author: string) {}
}

class User2 {
    private borrowedBooks: Book[] = [];

    borrowBook(book: Book): void {
        if (this.borrowedBooks.length >= 3) {
            console.log("Borrow limit reached.");
        } else {
            this.borrowedBooks.push(book);
        }
    }

    returnBook(book: Book): void {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    }

    getBorrowedBooks(): Book[] {
        return this.borrowedBooks;
    }
}

const user1 = new User2();
const book1 = new Book5("1984", "George Orwell");
const book2 = new Book5("Moby Dick", "Herman Melville");

user1.borrowBook(book1);
user1.borrowBook(book2);
console.log(user1.getBorrowedBooks());

class Book {
    id: number;
    title: string;
    author: string;
    totalCopies: number;
    copiesAvailable: number;
  
    constructor(id: number, title: string, author: string, totalCopies: number) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.totalCopies = totalCopies;
      this.copiesAvailable = totalCopies;
    }
  
    // Check if the book is available for borrowing
    isAvailable(): boolean {
      return this.copiesAvailable > 0;
    }
  
    // Borrow a book if available
    borrow(): boolean {
      if (this.isAvailable()) {
        this.copiesAvailable--;
        return true;
      }
      return false;
    }
  
    // Return a borrowed book
    returnBook(): void {
      if (this.copiesAvailable < this.totalCopies) {
        this.copiesAvailable++;
      }
    }
  }
  
  class Member {
    memberId: number;
    name: string;
    borrowedBooks: Book[];
  
    constructor(memberId: number, name: string) {
      this.memberId = memberId;
      this.name = name;
      this.borrowedBooks = [];
    }
  
    // Borrow a book and add it to the member's list of borrowed books
    borrowBook(book: Book): string {
      if (this.borrowedBooks.length >= 3) {
        return `${this.name} cannot borrow more than 3 books.`;
      }
  
      if (book.isAvailable()) {
        book.borrow();
        this.borrowedBooks.push(book);
        return `${this.name} successfully borrowed "${book.title}".`;
      } else {
        return `"${book.title}" is currently unavailable.`;
      }
    }
  
    // Return a borrowed book and update the member's list
    returnBook(book: Book): string {
      const index = this.borrowedBooks.findIndex(b => b.id === book.id);
      if (index !== -1) {
        this.borrowedBooks.splice(index, 1);
        book.returnBook();
        return `${this.name} successfully returned "${book.title}".`;
      } else {
        return `${this.name} has not borrowed "${book.title}".`;
      }
    }
  
    // List all borrowed books
    listBorrowedBooks(): string {
      if (this.borrowedBooks.length === 0) {
        return `${this.name} has not borrowed any books.`;
      }
  
      const bookTitles = this.borrowedBooks.map(b => `"${b.title}"`).join(", ");
      return `${this.name} has borrowed: ${bookTitles}.`;
    }
  }
  
  class Library {
    books: Book[];
  
    constructor() {
      this.books = [];
    }
  
    // Add a new book to the library
    addBook(book: Book): void {
      this.books.push(book);
    }
  
    // Find a book by its title
    findBookByTitle(title: string): Book | null {
      const book = this.books.find(b => b.title.toLowerCase() === title.toLowerCase());
      return book || null;
    }
  
    // Borrow a book from the library by a member
    borrowBook(member: Member, title: string): string {
      const book = this.findBookByTitle(title);
      if (book) {
        return member.borrowBook(book);
      } else {
        return `"${title}" is not available in the library.`;
      }
    }
  
    // Return a book to the library by a member
    returnBook(member: Member, title: string): string {
      const book = this.findBookByTitle(title);
      if (book) {
        return member.returnBook(book);
      } else {
        return `"${title}" is not a valid book in this library.`;
      }
    }
  }
  
  // Example usage:
  
  // Create library
  const library = new Library();
  
  // Add books to the library
  library.addBook(new Book("13"));
  library.addBook(new Book("23"));
  
  // Create a member
  const alice = new Member(101, "Alice");
  
  // Alice borrows "The Great Gatsby"
  console.log(library.borrowBook(alice, "The Great Gatsby")); // Alice successfully borrowed "The Great Gatsby"
  
  // Alice borrows "1984"
  console.log(library.borrowBook(alice, "1984")); // Alice successfully borrowed "1984"
  
  // Alice tries to borrow another copy of "1984"
  console.log(library.borrowBook(alice, "1984")); // Alice successfully borrowed "1984"
  
  // Alice tries to borrow a fourth book (exceeds the limit)
  console.log(library.borrowBook(alice, "The Great Gatsby")); // Alice cannot borrow more than 3 books.
  
  // List Alice's borrowed books
  console.log(alice.listBorrowedBooks()); // Alice has borrowed: "The Great Gatsby", "1984".
  
  // Alice returns "The Great Gatsby"
  console.log(library.returnBook(alice, "The Great Gatsby")); // Alice successfully returned "The Great Gatsby"
  
  // Alice returns "1984"
  console.log(library.returnBook(alice, "1984")); // Alice successfully returned "1984"
  
  // List Alice's borrowed books again
  console.log(alice.listBorrowedBooks()); // Alice has not borrowed any books.
  




