let bookList = [{name : 'Book1', author :'ram', year : 2011},{name : 'Book2', author :'raghav', year : 2015},{name : 'Book3', author :'rekha', year : 2009},{name : 'Book4', author :'bhagyashri', year : 2012},{name : 'Book5', author :'aditya', year : 2008}]
let filterBooks = (x) =>{
     let filterB = x.filter((ele) => {
        return ele.year < 2010;
     })
    filterB.map((ele) => {
        ele.author = ele.author.toUpperCase();
     })
     return filterB;
}
console.log(filterBooks(bookList));