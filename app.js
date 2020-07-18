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

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.contain');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form)
    }

    static deleteBook(el) {
         if(el.classList.contains('delete')) {
             el.parentElement.parentElement.remove()
         }
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    } 
}

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent Default
    e.preventDefault();
    // Get Form Values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Validate
    if(title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
        // Instantiate book
        const book = new Book(title, author, isbn);

        // Add book to UI
        UI.addBookToList(book);

        // Clear Fields
        UI.clearFields();
    }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
})
