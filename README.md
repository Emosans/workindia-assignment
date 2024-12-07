# WorkIndia Backend Assignment

This repository contains the backend implementation for the WorkIndia assignment. It includes user authentication, train booking features, and secure admin operations through a REST API.

## Goals of the Project

1. Securely handle user registration and authentication.
2. Enable users to book train seats and check booking details.
3. Provide an admin interface for adding train details securely.
4. Ensure robust security using JWT for user operations and API keys for admin access.

---

## Tech Stack

- **Language**: TypeScript  
- **Database**: PostgreSQL  
- **Authentication**: JWT for user operations, API keys for admin access  

---

## API Endpoints

### General

- **GET `/`**  
  - **Purpose**: Health check route.  
  - **Response**: `"Hello, World!"`

---

### User Routes

- **POST `/user/register`**  
  - **Purpose**: Register a new user.  
  - **Request Body**:  
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```  
  - **Response**: Confirms successful registration.  

- **POST `/user/login`**  
  - **Purpose**: Authenticate a user and provide a JWT token.  
  - **Request Body**:  
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```  
  - **Response**:  
    ```json
    {
      "message": "Login successful",
      "token": "JWT_TOKEN"
    }
    ```

- **POST `/user/bookseat`**  
  - **Purpose**: Book a train seat.  
  - **Authentication**: Bearer token (JWT).  
  - **Request Body**:  
    ```json
    {
      "userId": "number",
      "trainId": "number",
      "seatNumber": "number"
    }
    ```  
  - **Response**: Confirms the booking.  

- **GET `/user/booking/:bookingId`**  
  - **Purpose**: Retrieve booking details by `bookingId`.  
  - **Authentication**: Bearer token (JWT).  
  - **Response**: Returns booking information.

- **GET `/user/seat/:trainId/:seatNumber`**  
  - **Purpose**: Check whether a seat is booked.  
  - **Response**: Returns seat availability status.

---

### Admin Routes

- **POST `/admin/addtrain`**  
  - **Purpose**: Add a new train.  
  - **Authentication**: `x-api-key` header required.  
  - **Request Body**:  
    ```json
    {
      "source": "string",
      "destination": "string",
      "seats": "number"
    }
    ```  
  - **Response**: Confirms train addition.  

---

## Setup Instructions

1. **Clone the Repository**  
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```
2. **Install Dependencies**  
Install the required Node.js dependencies using npm:  
   ```bash
   npm install
   ```
3. **Create .env**
   ```bash
   DATABASE_URL=your_postgresql_connection_string
   JWT_SECRET=your_jwt_secret
   ADMIN_API_KEY=your_admin_api_key
   ```
4. **Start the server**
   Run this command at the root of the folder.
   ```bash
   npx ts-node src/index.ts
   ```
5. **Go to swagger ui and rus tests**
   ```bash
   localhost:5000/swagger
   ```


