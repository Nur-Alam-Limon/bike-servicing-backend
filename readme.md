
# 🚀 Bike Servicing Management API

A RESTFULL backend API for a Bike Servicing Management System that enables a servicing center to manage customers, bikes, and service records with ease. Built using modern technologies including TypeScript, Node.js, PostgreSQL, Prisma ORM, and Express.js.

---

**Live Link** - https://bike-servicing-backend.vercel.app

---

## 📌 Features

- 🔧 Customer CRUD operations
- 🏍️ Bike CRUD with customer relation
- 🛠️ Service Record CRUD
- 🟡 Service status tracking (`pending`, `in-progress`, `done`)
- 📄 UUID-based identifiers using Prisma and PostgreSQL

---

## ⚙️ Tech Stack

| Tech           | Description                 |
|----------------|-----------------------------|
| **TypeScript** | Typed JavaScript            |
| **Node.js**    | Runtime environment         |
| **Express.js** | Web framework               |
| **PostgreSQL** | Relational database         |
| **Prisma ORM** | Database ORM with UUIDs     |

---

## 🗂 Project Structure

```
📦src
 ┣ 📂controllers
 ┃ ┣ 📜bike.controller.ts
 ┃ ┣ 📜customer.controller.ts
 ┃ ┗ 📜service.controller.ts
 ┣ 📂middlewares
 ┃ ┣ 📜errorHandler.ts
 ┃ ┗ 📜notFound.ts
 ┣ 📂routes
 ┃ ┣ 📜bike.routes.ts
 ┃ ┣ 📜customer.route.ts
 ┃ ┗ 📜service.routes.ts
 ┣ 📂services
 ┣ 📂utils
 ┃ ┗ 📜response.ts
 ┣ 📜app.ts
 ┗ 📜server.ts
```

---

## 🛠 Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/bike-servicing-api.git
cd bike-servicing-api
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set Up Environment Variables**

Create a `.env` file and add:

```
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<dbname>?schema=public"
PORT=5000
```

4. **Generate Prisma Client and Migrate**

```bash
npx prisma migrate dev --name init
```

5. **Start the Server**

```bash
npm run dev
```

---

## 📦 API Endpoints

### 🔹 Customer Management

- `POST /api/customers` - Create new customer  
- `GET /api/customers` - Get all customers  
- `GET /api/customers/:id` - Get customer by ID  
- `PUT /api/customers/:id` - Update customer  
- `DELETE /api/customers/:id` - Delete customer  

### 🔹 Bike Management

- `POST /api/bikes` - Add a new bike  
- `GET /api/bikes` - Get all bikes  
- `GET /api/bikes/:id` - Get bike by ID  

### 🔹 Service Management

- `POST /api/services` - Create service record  
- `GET /api/services` - Get all service records  
- `GET /api/services/:id` - Get service by ID  
- `PUT /api/services/:id` - Update service (e.g. mark as `done`)  
- `DELETE /api/services/:id` - Delete a service record  
- `GET /api/services/status` - Get pending or overdue services  
---

## ✅ 1. Customer Management

### 🔹 `POST /api/customers` – Create a new customer  
**Request:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "123-456-7890"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Customer created successfully",
  "data": {
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "createdAt": "2025-04-11T12:34:56.789Z"
  }
}
```

---

### 🔹 `GET /api/customers` – Get all customers  
**Response (200 Ok):**
```json
{
  "success": true,
  "message": "Customers fetched successfully",
  "data": [
    {
      "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "123-456-7890",
      "createdAt": "2025-04-11T12:34:56.789Z"
    }
  ]
}
```

---

### 🔹 `GET /api/customers/:id` – Get customer by ID  
**Response (200 Ok):**
```json
{
  "success": true,
  "message": "Customer fetched successfully",
  "data": {
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "createdAt": "2025-04-11T12:34:56.789Z"
  }
}
```

---

### 🔹 `PUT /api/customers/:id` – Update customer  
**Request:**
```json
{
  "name": "Johnathan Doe",
  "phone": "555-123-9999"
}
```

**Response (200 Ok):**
```json
{
  "success": true,
  "message": "Customer updated successfully",
  "data": {
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
    "name": "Johnathan Doe",
    "email": "john.doe@example.com",
    "phone": "555-123-9999",
    "createdAt": "2025-04-11T12:34:56.789Z"
  }
}
```

---

### 🔹 `DELETE /api/customers/:id` – Delete customer  
**Response (200 Ok):**
```json
{
  "success": true,
  "message": "Customer deleted successfully"
}
```

---

## ✅ 2. Bike Management

### 🔹 `POST /api/bikes` – Add a new bike  
**Request:**
```json
{
  "brand": "Yamaha",
  "model": "R15",
  "year": 2022,
  "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Bike added successfully",
  "data": {
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "brand": "Yamaha",
    "model": "R15",
    "year": 2022,
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
  }
}
```

---

### 🔹 `GET /api/bikes` – Get all bikes  
**Response (200 Ok):**
```json
{
  "success": true,
  "message": "Bikes fetched successfully",
  "data": [
    {
      "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
      "brand": "Yamaha",
      "model": "R15",
      "year": 2022,
      "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
    }
  ]
}
```

---

### 🔹 `GET /api/bikes/:id` – Get bike by ID  
**Response (200 Ok):**
```json
{
  "success": true,
  "message": "Bike fetched successfully",
  "data": {
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "brand": "Yamaha",
    "model": "R15",
    "year": 2022,
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
  }
}
```

---

## ✅ 3. Service Management

### 🔹 `POST /api/services` – Create a service record  
**Request:**
```json
{
  "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
  "serviceDate": "2025-04-11T10:00:00.000Z",
  "description": "Oil change",
  "status": "pending"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Service record created successfully",
  "data": {
    "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "serviceDate": "2025-04-11T10:00:00.000Z",
    "completionDate": null,
    "description": "Oil change",
    "status": "pending"
  }
}
```

## Author

[Nur Alam Chowdhury](https://github.com/Nur-Alam-Limon)
```


