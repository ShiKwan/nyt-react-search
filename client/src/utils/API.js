import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getNews: function(title, startYear, endYear){
    console.log(title);
    console.log(startYear);
    console.log(endYear);
    const API_KEY = '7efd7705bed343d498f6b717ffda6638';
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      API_KEY + "&q=" + title + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
    return axios.get(queryURL);
  }
};
