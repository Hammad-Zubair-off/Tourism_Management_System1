Here’s a **README.md** file template for your project with a detailed overview of all the routes and how to send data.

---

# Tourism Management System API

## Overview

This API is designed for a tourism management system where users can manage tourist attractions, visitors, and their reviews. Below is the list of all the routes available in the API, along with details on how to send the data using Postman.

---

## **Routes Overview**

### **Attraction Routes**

#### 1. **Create a New Attraction**
- **Route:** `POST http://localhost:3000/attractions/`
- **Description:** Creates a new attraction.
- **Body (x-www-form-urlencoded):**
  - `name`: Name of the attraction (e.g., "Eiffel Tower")
  - `location`: Location of the attraction (e.g., "Paris, France")
  - `entryFee`: Entry fee of the attraction (e.g., `25`)

#### 2. **Get Top 5 Rated Attractions**
- **Route:** `GET http://localhost:3000/attractions/top-rated`
- **Description:** Returns the top 5 attractions with the highest ratings.
- **No body required.**

#### 3. **Get Visitors' Review Activity**
- **Route:** `GET http://localhost:3000/attractions/activity`
- **Description:** Returns a list of visitors and the count of attractions they have reviewed.
- **No body required.**

---

### **Visitor Routes**

#### 1. **Register a New Visitor**
- **Route:** `POST http://localhost:3000/visitors/`
- **Description:** Registers a new visitor.
- **Body (x-www-form-urlencoded):**
  - `name`: Name of the visitor (e.g., "John Doe")
  - `email`: Email of the visitor (e.g., "john@example.com")

#### 2. **Add a Visited Attraction for a Visitor**
- **Route:** `POST http://localhost:3000/visitors/visit`
- **Description:** Adds a visited attraction for the visitor.
- **Body (x-www-form-urlencoded):**
  - `email`: Email of the visitor (e.g., "john@example.com")
  - `attractionName`: Name of the attraction (e.g., "Eiffel Tower")

---

### **Review Routes**

#### 1. **Create a Review for an Attraction**
- **Route:** `POST http://localhost:3000/reviews/`
- **Description:** Allows a visitor to create a review for an attraction.
- **Body (x-www-form-urlencoded):**
  - `visitorEmail`: Email of the visitor (e.g., "john@example.com")
  - `attractionName`: Name of the attraction (e.g., "Eiffel Tower")
  - `score`: Rating score for the attraction (e.g., `5`)
  - `comment`: Optional comment (e.g., "Amazing experience, loved it!")

---

## **Error Handling**

- **400 Bad Request:** Invalid data or missing fields.
- **500 Internal Server Error:** Server-related issues.

---

## **Example Responses**

- **Create New Attraction Response:**
  ```json
  {
    "_id": "618f1b8e24b1b14d2c55a9a4",
    "name": "Eiffel Tower",
    "location": "Paris, France",
    "entryFee": 25,
    "rating": 0
  }
  ```

- **Get Top 5 Rated Attractions Response:**
  ```json
  [
    {
      "_id": "618f1b8e24b1b14d2c55a9a4",
      "name": "Eiffel Tower",
      "location": "Paris, France",
      "entryFee": 25,
      "rating": 5
    },
    {
      "_id": "618f1b8e24b1b14d2c55a9a5",
      "name": "Statue of Liberty",
      "location": "New York, USA",
      "entryFee": 30,
      "rating": 4.5
    }
  ]
  ```

- **Get Visitors' Review Activity Response:**
  ```json
  [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "reviewCount": 3
    },
    {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "reviewCount": 1
    }
  ]
  ```

---

## **Running the API**

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the server with `npm start`.
4. The API will be available at `http://localhost:3000`.

---

Feel free to adjust the data and routes according to your preferences or future changes. Let me know if you need further assistance!