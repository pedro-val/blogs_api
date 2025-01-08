###  Blog API Project Repository!
In this project, an API and a database were developed for content production in a blog!

The application was developed in Node.js using the Sequelize package to perform CRUD operations on posts. The API follows REST principles.

Endpoints connected to the database were implemented to perform the following functionalities:

Creation of migrations for the tables: users, categories, blog_posts, and posts_categories.
Creation of the User model in src/models/User.js with the correct properties.
Implementation of the POST /login endpoint to allow user authentication.
Implementation of the POST /user endpoint to add a new user to the database.
Implementation of the GET /user endpoint to list all users in the database.
Implementation of the GET /user/:id endpoint to search for a user by ID in the database.
Creation of the Category model in src/models/Category.js with the correct properties.
Implementation of the POST /categories endpoint to add new categories to the database.
Implementation of the GET /categories endpoint to list all categories in the database.
Creation of the BlogPost model in src/models/BlogPost.js with the correct properties and associations.
Creation of the PostCategory model in src/models/PostCategory.js with the correct properties and associations.
Implementation of the POST /post endpoint to add new posts to the blog, linked to categories.
Implementation of the GET /post endpoint to list all posts, including user and category information.
Implementation of the GET /post/:id endpoint to search for a post by ID in the database.
Implementation of the PUT /post/:id endpoint to update the attributes of a post, maintaining user ownership restrictions.
Implementation of the DELETE /post/:id endpoint to delete a post from the database.
Implementation of the DELETE /user/me endpoint to delete the authenticated user.
Implementation of the GET /post/search?q=:searchTerm endpoint to search for posts based on a search term.
Technologies Used
Node.js
Sequelize
REST
Postgres





