{
    // Problem-6 :  You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

    type Book = {
        title : string;
        author : string;
        publishedYear : number
    }

    const isRecentBook = (book : Book) => {
        const currentYear = new Date().getFullYear()
        if(currentYear - book.publishedYear <= 5){
            return true
        }else{
            return false
        }
    }





    const book1: Book = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2023
    };
    console.log(isRecentBook(book1));
    



}