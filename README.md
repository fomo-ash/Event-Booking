# Event-Booking

# 🎟️ Event Booking System (Backend)

A Node.js + Express.js backend for a basic event booking platform where:
- Users can register, log in, view events, book slots, and cancel bookings
- Admins can create, update, and delete events

All data is stored in MongoDB, with proper JWT-based authentication and authorization.

---

## 🚀 Features

### 👤 Authentication
- Register & Login with hashed passwords (bcrypt)
- Secure sessions with JSON Web Tokens (JWT)
- Role-based access control for Admins

### 📅 Event Management
- Admins can add, update, and delete events
- Events contain name, date, location, capacity, and current bookings

### 🎫 Booking System
- Authenticated users can book available events
- Users can cancel their bookings
- Prevents double booking and overbooking

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Auth:** JWT, bcryptjs
- **Validation & Middleware:** Custom middlewares for auth & admin control
