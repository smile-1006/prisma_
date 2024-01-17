

# Institute Management Web Development Project

## Overview

This project aims to create a comprehensive Institute Management System with features such as faculty management using a modern tech stack. The primary technologies utilized include Prisma, MongoDB, Next.js, and JavaScript.

## Tech Stack

- **Prisma**: Prisma is used as the database ORM (Object-Relational Mapping) to interact with the MongoDB database, providing a type-safe and convenient way to handle database operations.

- **MongoDB**: MongoDB is the chosen NoSQL database to store and manage data related to the Institute Management System. It provides scalability and flexibility for handling various types of data.

- **Next.js**: Next.js is employed as the React framework for building the frontend of the web application. It offers server-side rendering, routing, and other features to enhance the performance and development experience.

- **JavaScript**: The project is developed using JavaScript, which is the primary language for both the backend and frontend.

## Project Features

### Faculty Management

- **Add Faculty**: The system allows users to add new faculty members by providing necessary details such as faculty ID, name, gender, designation, date of joining, AICTE ID, and state.

- **Delete Faculty**: Authorized users can delete faculty members from the system, removing their information from the database.

- **Get Faculty Information**: The system provides functionality to retrieve information about faculty members associated with a particular institute.

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/smile-1006/prisma_.git
cd prisma_
```
*note* : Inside the prisma_ folder there is prismanextjs folder which will lead you throughout the project structure.

2. Install dependencies:

```bash
npm install
```

3. Configure Prisma:

   - Create a `.env` file based on the provided `.env.example`.
   - Update the database connection string in the `.env` file.

4. Apply database migrations:

```bash
npx prisma migrate dev
```

5. Run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to access the Institute Management System.

## Contributing

If you'd like to contribute to the project, please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
