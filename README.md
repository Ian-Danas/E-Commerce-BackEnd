# E-Commerce-BackEnd

## Table of Contents
[Description](#Description)

[Installation](#Installation)

[Usage](#Usage)

[Contributing](#Contributing)

[Tests](#Tests)


[Questions](#Questions)


## Description <a id = "Description"></a>
This product serves as a backend server that creates routes to get entries stored in a database for products on an ecommerce website. The user will be able to hit routes through insomnia to see data that is stored in a database for categories, products that belong to those categories, and tags that belong to the products.
## Installation <a id = "Installation"></a>
To run this application the user should first clone the repository. From there they should install the dependencies by running "npm i" in the terminal. From there they should set up thier .env file which should include DB_NAME='enter database name' DB_USER='enter mysql user' DB_PASSWORD='enter mysql password'. From there they can run the schema.sql file in the db folder to setup the database. Lastly run the seeds by running 'npm run seed' in the command line to seed data in the database if they wish. Once all these steps have been followed running server through "node server.js" will start up the server.

## Usage <a id = "Usage"></a>
To see the data that is returned up each route the user should follow the following route guide 
- GET "http://localhost:3001/api/categories/ " to get all the categories
- GET "http://localhost:3001/api/categories/:id" to get category by id 
- POST "http://localhost:3001/api/categories/" to create a category 
- PUT "http://localhost:3001/api/categories/:id" to update entry at that id
- DELETE "http://localhost:3001/api/categories/:id" to delete category at that id

the same routes can be used for Products and Tags by swapping out "categories" in the above routes with "tags" or "products". When running POST and PUT routes make sure to follow the same json structure that is returned for the objects in the GET routes
 
Link to deployed github repo:  https://github.com/Ian-Danas/E-Commerce-BackEnd
Link to video demo: https://drive.google.com/file/d/1bKAd_mU1szS5_gKGKTCI4Yu2s33dt1Hy/view 
## Contributing <a id = "Contributing"></a>
Ian Danas
## Tests <a id = "Tests"></a>
N/A

## Questions <a id = "Questions"></a>
if you have an additional questions about the project reach out to me at the github username or the email below

 github: https://github.com/Ian-Danas

 Email: ianmdanas@gmail.com

## Credits
Code in the routing folders was adapted from this in class demo https://github.com/Rufasa85/zoo-seq-demo
