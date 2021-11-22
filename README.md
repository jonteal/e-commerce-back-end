# E-Commerce Back End

<a name="description"></a>

## Description
The purpose of this program was to build a back end for an e-commerce website with Express, Mysql2, and Sequelize. Using the routes and models, a user can perform GET, POST, PUT, and DELETE requests using their chosen REST API client in order to maintain the product, category, and tag data for their commercial purposes.


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#description)
- [User Story](#userstory)
- [Acceptance Criteria](#acceptancecriteria)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#test)
- [Questions](#questions)
- [Video](#video)
- [Screenshots](#screenshots)
- [Links](#links)
- [Resources / Credits](#credits)


<a name="userstory"></a>

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

<a name="acceptancecriteria"></a>

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

<a name="installation"></a>

## Installation
* Clone the repository using:

```
git clone https://github.com/jonteal/e-commerce-back-end
```
* Be sure that you are in the current working directory
* Install the dependencies (express, dotenv, mysql2, and sequelize) by opening the terminal and running
```
npm install OR npm i
```
* In the terminal, log into the MySql by typing
```
mysql -u root -p
```
* Then type in your password for MySql. Once logged in, you will need to source the schema file in the db folder. In order to do that, type in the following in the terminal and hit enter afterwards. 
```
SOURCE db/schema.sql;
```
* Once the schema file is sourced, type 'exit' in the command line and get out of mysql.
* The next step is to run the seed data in order to populate the database. To do that, run the following in the command line.
```
node seeds/index.js
```
* Next, run the project by typing the following command in the terminal:
```
npm start OR node server.js
```

<a name="usage"></a>

## Usage
* In order to use the backend once the above steps are completed, pull up your own chosen REST API client. Once that is done, you can initiate a GET, POST, PUT, or DELETE request by creating a request and setting it to which request type you wish to execute. 

* To initiate a GET request for all Categories, Products, or Tags, set the request type to 'GET' and put the following in the url search bar:
```
http://localhost:3001/api/categories
http://localhost:3001/api/products
http://localhost:3001/api/tags
```
* If you would like to get any individual Category, Product, or Tag, simply add a '/' at the end of the path and a number to GET any individual item tied to that given 'id' number. 

* To initiate a POST request for Categories, Products, or Tags, set the request type to 'POST', put any of the previous url paths in the search bar and select the body data format to JSON. Then in the body, add an item that matches the format of the data for that type of item. You can refer to the GET requests for those formats. Once a new item is typed out in the body text area, send the request. The new item should be created, and you can verify by sending another GET request.

* To initiate a PUT request for Categories, Products, or Tags, set the request type to 'PUT', and as before, enter in the updated version of any item in the body in JSON format. You can copy and paste an item from a GET request if you are selecting a specific item to update. Once the item is pasted in the body text area, update the information you wish to, and then be sure to add a '/' in the search bar and add that item's id number after the '/'. Once done, send the request and the update should be done. As before, send another GET request to verify the update executed as intended. 

* To initiate a DELETE request for Categories, Products, or Tags, set the request type to 'DELETE'. In order to delete any item from any table, simply find that item via a GET request. Once you know which item to delete, enter it's table-specific url as shown in the GET request instruction above, and add a '/' to the end of the url and its id number after it. Once that is done, send the request. The item should be deleted, and you can verify this by sending another GET request to ensure it was deleted as intended. 




<a name="license"></a>

## License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


<a name="contributing"></a>

## How to Contribute
1. [Fork the repo!](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. Create a feature branch:
```
git checkout -b yourname-branch
```
3. Commit changes:
```
git commit -m 'Your changes here'
```
4. Push to the branch:
```
git push origin yourname-branch
```
5. Submit a pull request and wait for it to be approved or denied.

<a name="tests"></a>

## Tests
No tests available at this time.


<a name="questions"></a>

## Questions
If you have any questions or comments, please feel free to contact me by email at jonjacksonvibes@gmail.com!


<a name="video"></a>

## Video
https://drive.google.com/file/d/1RqB2Ge5KWqqgljRrG9Kjwb2t07AVWX5j/view

<a name="screenshots"></a>

## Screenshots



![Screenshot of GET-Categories](/e-commerce-back-end/Assets/GET-categories.png)
![Screenshot of GET-Products](/e-commerce-back-end/Assets/GET-products.png)
![Screenshot of GET-Tags](/e-commerce-back-end/Assets/GET-tags.png)

<a name="links"></a>

## Links
Github Repository: https://github.com/jonteal/e-commerce-back-end


<a name="credits"></a>

## Resources / Credits
This project was authored by Jon Jackson.