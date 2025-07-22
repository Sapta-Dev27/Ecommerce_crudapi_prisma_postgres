# 🛍️ Category & Product Management API 
This is a RESTful API built using Node.js, Express.js, and PostgreSQL for managing categories and products. The architecture follows a clean, modular MVC pattern with services, controllers, and route layers . Here is a detailed flow of the architechture :

![WhatsApp Image 2025-07-20 at 11 49 09_1267be7c](https://github.com/user-attachments/assets/e0c0f65e-13f5-492e-89f7-4feae1bcae4f)

# 📂 Project Structure
```
├── models/
│   └── Category, Product (PostgreSQL)
├── services/
│   ├── category.service.js
│   └── product.service.js
├── controllers/
│   ├── category.controller.js
│   └── product.controller.js
├── routes/
│   ├── category.routes.js
│   └── product.routes.js
├── server.js

```

# 🧠 Tech Stack

1.Backend: Node.js, Express.js
2.Database: PostgreSQL
3.ORM: Prisma (assumed from typical stack)
4.API Client: Postman (used for testing)
5.Architecture: MVC Pattern

# 📦 API Endpoints For Category
```
| Method | Endpoint               | Description           |
| ------ | ---------------------- | --------------------- |
| POST   | `/create`              | Create a new category |
| DELETE | `/delete/:id`          | Delete a category     |
| GET    | `/fetch`               | Get all categories    |
| GET    | `/fetch/:id`           | Get category by ID    |
| PUT    | `/update/:id`          | Update category by ID |

```
# 🛒 Product Routes 
```
| Method | Endpoint                      | Description                 |
| ------ | ----------------------------- | --------------------------- |
| POST   | `/create`                     | Create a new product        |
| GET    | `/fetch`                      |  Get all products           |
| GET    | `/fetch/:id`                  | Get product by ID           |
| DELETE | `/delete/:id`                 | Delete a product            |
| PUT    | `/update/:id`                 | Update product by ID        |

```
# 🚀 Getting Started 

1. Clone the repo: 
```
git clone https://github.com/Sapta-Dev27/Ecommerce_crudapi_prisma_postgres/
```
2. Install dependencies:
   ```
   npm install
   ```
3. Set up .env for database credentials.

4. Run the server:
   ```
   npm start
   ```
# 📝 License
This project is licensed under the MIT License.
