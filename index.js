// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books = [];

    constructor(initialBooks = []) {
        this.#books = initialBooks;
    }
    
    get allBooks() {
    return this.#books;
    }

    addBook(title) {
        if (this.#books.some(book => book.title === title)) {
            throw new Error(`Книга с названием "${title}" уже существует в списке.`);
        } else {
            this.#books.push({ title });
        }
    }

    removeBook(title) {
        const index = this.#books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.#books.splice(index, 1);
        } else {
            throw new Error(`Книга с названием "${title}" не существует в списке.`);
        }
    }

    hasBook(title) {
        return this.#books.some(book => book.title === title);
    }
}

const initialBooks = [{ title: 'The Catcher in the Rye' }, { title: 'To Kill a Mockingbird' }];
const myLibrary = new Library(initialBooks);
myLibrary.addBook('1984');
console.log(myLibrary.allBooks);
myLibrary.removeBook('To Kill a Mockingbird');
console.log(myLibrary.allBooks);
console.log(myLibrary.hasBook('1984'));
console.log(myLibrary.hasBook('To Kill a Mockingbird'));


// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const userInputElement = document.querySelector('.user-input');
const buttonElement = document.querySelector('.add-button');
const listElement = document.querySelector('.item-list');
const errorElement = document.querySelector('.error-message');

buttonElement.addEventListener('click', () => {
    try {
        if (userInputElement.value.length < 50 || userInputElement.value.length > 500) {
            throw new Error('Длина введенного отзыва не корректна')   
        }
        const li = document.createElement('li');
        li.textContent = userInputElement.value;
        listElement.appendChild(li);
        errorElement.textContent = 'Отзыв добавлен'
    } catch (error) {
        errorElement.textContent = error.message;
    }
    finally{
        console.log('Ок');
    }
})