class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }


get state() {
    return this._state;
}

set state(value) {
    if (value < 0) {
        this._state = 0;
    } else if (value > 100) {
        this._state = 100;
    } else {
        this._state = value;
    }
}
 fix() {
    this.state = this._state * 1.5;
 }

 damage(percent) {
    this.state = this.state - percent;
    console.log("Книга повреждена на " + percent + "%. Состояние: " + this.state + "%");
 }

 restore(percent) {
   this.state = this.state + percent;
    console.log("Книга восстановлена на " + percent + "%. Состояние: " + this.state + "%"); 
 }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
        }
    }
     class NovelBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
            super(author, name, releaseDate, pagesCount);
            this.type = "novel";
        }
     }
     class FantasticBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
            super(author, name, releaseDate, pagesCount);
            this.type = "fantastic";
        }
     }

     class DetectiveBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
            super(author, name, releaseDate, pagesCount);
            this.type = "detective";
        }
     }

     const sherlock = new PrintEditionItem(
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
     );
     console.log(sherlock.releaseDate);
     console.log(sherlock.state);
     sherlock.fix();
     console.log(sherlock.state);

     const picknick = new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
     );
     console.log(picknick.author);
     picknick.state = 10;
     console.log(picknick.state);
     picknick.fix();
     console.log(picknick.state);

     //Задача 2
     class Library {
        constructor(name) {
            this.name = name;
            this.books = [];
        }

        addBook(book) {
            if (book.state > 30) {
                this.books.push(book);
                console.log("Книга " + book.name + " добавлена в библиотеку");
                return true;
            } else {
                console.log("Книга " + book.name + " сильно повреждена (состояние " + book.state + "%)");
                return false;
            }
        }

     findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value)
                return this.books[i];
        }
        return null;
     }

     giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                const book = this.books.splice(i, 1)[0];
                console.log("Книга " + book.name + " выдана");
                return book;
            }
        }
      console.log("Книга " + bookName + " не найдена");
      return null;  
     }
    }

    console.log("Тест");
    const library = new Library("Библиотека имени Ленина");
    console.log("Создана библиотека: " + library.name)

    library.addBook(
        new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);
library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new FantasticBook("Абрахам Меррит", "Лунная заводь", 1919, 433));

console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);
console.log(library.findBookBy("releaseDate", 1919).name);

console.log("Выдача книги");
const givenBook = library.giveBookByName("Машина времени");

console.log("Повреждение книги");
if (givenBook) {
    givenBook.damage(40);
    console.log("Книга повреждена. Состояние: " + givenBook.state + "%");
}

console.log("Восстановление книги");
if (givenBook) {
    givenBook.restore(70);
    console.log("Книга восстановлена. Состояние: " + givenBook.state + "%");
}

console.log("Добавление восстановленной книги в библиотеку");
if (givenBook) {
    const added = library.addBook(givenBook);
    if (added) {
        console.log("Книга возвращена в библиотеку.");
    } else {
        console.log("Книгу нельзя вернуть в библиотеку, так как её состояние " + givenBook.state + "%");
    }
}


console.log("Количество книг до выдачи: " + library.books.length);
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);





