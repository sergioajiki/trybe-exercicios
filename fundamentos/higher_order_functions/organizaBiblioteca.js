const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

//   const expectedResult = 'Stephen King';

const authorBornIn1947 = () => {
    console.log(books.find(book => book.author.birthYear === 1947).author.name)
    return books.find(book => book.author.birthYear === 1947).author.name;
}
// authorBornIn1947()

// const expectedResult = 'Duna';
const smallerName = () => {
    let nameBook;
    books.forEach((book) => {
        if (!nameBook || book.name.length < nameBook.length) {
            nameBook = book.name;
        }
    });
    console.log(nameBook);
    return nameBook;
}
// smallerName()

const getNamedBook = () => {
    console.log(books.find((book) => book.name.length === 26).name);
    return books.find((book) => book.name.length === 26).name;
}
// getNamedBook()

const everyoneWasBornOnSecXX = () => {
    return books.every((book) => (
        book.author.birthYear >= 1901 && book.author.birthYear <= 2000
    ));
}
// console.log(everyoneWasBornOnSecXX());


const someBookWasReleaseOnThe80s = () => {
    return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}
// console.log(someBookWasReleaseOnThe80s());

const expectedResult = false;

const authorUnique = () => {
    return books.every((book) =>
        !books.some((bookSome) =>
            (bookSome.author.birthYear === book.author.birthYear)
            && (bookSome.author.name !== book.author.name)))
}

// console.log(authorUnique());

const formatedBookNames = () => {
    return books.map((book) =>
        (`${book.name} - ${book.genre} - ${book.author.name}`));
};
// console.log(formatedBookNames());

const nameAndAge = () => {
    return books.map((book) => (
        {
            author: book.author.name,
            age: book.releaseYear - book.author.birthYear,
        }
    ))
        .sort((obj1, obj2) => obj1.age - obj2.age);
}

// console.log(nameAndAge());

const fantasyOrScienceFiction = () => {
    return books.filter(book => {
        return book.genre === 'Fantasia' || book.genre === 'Ficção Científica';
    });
}
// console.log(fantasyOrScienceFiction());

const oldBooksOrdered = () => {
    const currentYear = new Date().getFullYear();
    return books
        .filter((book) => (currentYear - book.releaseYear) >= 60)
        .sort((book1, book2) => book1.releaseYear - book2.releaseYear);
}

//   console.log(oldBooksOrdered());


const booksByAuthorBirthYear = (birthYear) => {
    return books
        .filter((book) => book.author.birthYear === birthYear)
        .map((book) => book.name)
}
const result = booksByAuthorBirthYear(1920);
//   console.log(result);

const wantedGenres = ['Fantasia', 'Ficção Científica'];
const fantasyOrScienceFictionAuthors = () => {
    return books
    .filter((book) => wantedGenres.includes(book.genre))
    .map((book) => book.author.name)
    .sort();
}
// console.log(fantasyOrScienceFictionAuthors());

const oldBooks = () => {
    const currentYear = new Date().getFullYear();
      return books
      .filter((book) => (currentYear - book.releaseYear) >= 60)
      .map((book) => book.name)
      .sort()
  }

console.log(oldBooks());

const authorWith3DotsOnName = () => {
    return books.filter((book) => (
      book.author.name[1] === '.'
      && book.author.name[4] === '.'
      && book.author.name[7] === '.'
    ))
  }
  console.log(authorWith3DotsOnName());

  