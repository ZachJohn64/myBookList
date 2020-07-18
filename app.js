// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Rich Dad, Poor Dad',
                author: 'Robert Kiyosaki',
                isbn: '26151521036'
            },
            {
                title: 'Pitch Anything',
                author: 'Oren Klaff',
                isbn: '18774894981'
            },
            {
                title: 'How To Win Friends and Influence People',
                author: 'Dale Carnegie',
                isbn: '81891981563'
            }
        ];
        
        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list');

        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);

    }
}

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

// Event: Add a Book

// Event: Remove a Book
