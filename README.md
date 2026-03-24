# 🚀 Real-Time Chat Backend API

A **scalable real-time chat backend** built using **Node.js, Express, MongoDB, and Socket.IO**.
This project enables **instant messaging** between users with secure authentication and persistent message storage.

---

## ✨ Features

* 🔐 JWT Authentication (Register/Login)
* 💬 Real-time messaging using Socket.IO
* 🧠 Persistent chat storage (MongoDB)
* 👤 User management system
* ⚡ Fast and scalable backend architecture
* 🌐 REST API + WebSocket integration

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* Socket.IO
* JWT Authentication
* bcrypt.js

---

## 📁 Project Structure

```
chat-backend/
│── config/
│   └── db.js
│
│── models/
│   ├── User.js
│   └── Message.js
│
│── controllers/
│   └── authController.js
│
│── routes/
│   └── authRoutes.js
│
│── middleware/
│   └── authMiddleware.js
│
│── socket/
│   └── socket.js
│
│── server.js
│── package.json
│── .env
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/chat-backend.git
cd chat-backend
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the Server

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 🔐 Authentication APIs

### Register User

```json
POST /api/auth/register

{
  "name": "Rishi",
  "email": "rishi@example.com",
  "password": "123456"
}
```

---

### Login User

```json
POST /api/auth/login

{
  "email": "rishi@example.com",
  "password": "123456"
}
```

---

## 💬 Real-Time Messaging (Socket.IO)

### 📡 Connection

* Client connects using Socket.IO
* Server listens for events

---

### 📤 Send Message Event

```
event: sendMessage
```

```json
{
  "sender": "userId1",
  "receiver": "userId2",
  "text": "Hello!"
}
```

---

### 📥 Receive Message Event

```
event: receiveMessage
```

```json
{
  "_id": "messageId",
  "sender": "userId1",
  "receiver": "userId2",
  "text": "Hello!",
  "createdAt": "timestamp"
}
```

---

## 🔗 API Endpoint

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

---

## 🧪 Testing

Use tools like:

* Postman
* Thunder Client
* Socket.IO Client (frontend)

---

## 🚀 Future Enhancements

* 🟢 Online / Offline status
* ✍️ Typing indicator
* 👥 Group chat system
* 📎 File & image sharing
* 🔔 Push notifications
* ⚡ Redis for scaling

---

## 💡 Learning Outcomes

* Real-time communication using WebSockets
* Backend system design for chat apps
* Authentication & security best practices
* Database schema design
* Event-driven architecture

---


---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

---

## 📄 License

MIT License

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

## 👨‍💻 Author

**Rishi Soni**

---

🔥 *Build real-time systems. Stand out as a backend engineer.*
