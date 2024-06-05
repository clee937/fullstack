# Japanese Onomatopoeias

## About

Japanese Onomatopoeias is a full stack application for Japanese learners to store and retrieve onomatopoeias encountered in their Japanese learning journey. There are thousands of onomatopoeia in Japanese and this app is designed as a learning/memory aid. The application uses CRUD functionalities allowing users to create, retrieve, update and delete onomatopoeia information.

## Features

- Database with CRUD functionality to store, retrieve, create, update, and delete onomatopoeia data
- Onomatopoeia cards with fields for adding the onomatopoeia meaning, an example sentence, and category
- Drop down box to filter onomatopoeias by category
- Search bar to search by onomatopoeia
- Nav bar allowing navigation between home page and the add new onomatopoeia form
- Update functionality and form allowing onomatopoeia info to be amended/updated
- Delete functionality allowing onomatopoeias to be deleted

## Preview

![japanese-onomatopoeias](/japanese-onomatopoeias.png "image of japanese onomatopoeia fullstack app")

## Code / Appication architecture

### Front-end

- React front-end
- Components: Onomatopoeia, Category, Onomatopoeia list, Searchbar, Select drop down menu, Loading spinner
- Containers: Home page, View Onomatopoeaia page, Create Onomatopoeia page, Edit Onomatopoeia page

### Back-end

- The back-end of this application comprises of a MySQL database with CRUD functionality allowing for records to be created, retrieved, updated, and deleted.
- Data is stored within 2 tables: Onomatopoeias and Categories, with a many-to-many (many onomatopoeias to one category) and one-to-one (one category per onomatopoeia) relationships. The two tables are joined by the category id.
- The api and backend is written with Java and Spring and follows MVC and Service Repository patterns to communicate and pass data from the database to the front-end.
- It is separated into 3 parts each with their own role for a clear separation of concerns:
  - The onomatopoeia controller is the entryway into the back-end and the database. It holds the endpoints and is responsible for interaction with the front end of the application (View) by exposing the functionality of the api so it can be used. It delegates the role of interacting with the onomatopoeia repository to the onomatopoeia service.
  - The onomatopoeia service is responsible for the business and application logic. It is wired to the repositories (with Spring annotation) and holds all the methods to interact with the database via the onomatopoeia and category respositories.
  - The onomatopoeia respository is responsible for storing and retrieving the data from the database.

## Technologies used

- HTML/SCSS
- React
- Java
- Spring
- MySQL
- Git/GitHub
