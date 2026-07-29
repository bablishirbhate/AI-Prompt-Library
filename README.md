# 🤖 AI Prompt Library

AI Prompt Library is a web application designed to help users create, manage, organize, and reuse AI prompts easily.

This application provides a simple and efficient platform where users can store their AI prompts, search them quickly, categorize them, mark favorites, and manage their prompt collection.

---

## 🚀 Features

### 📌 Prompt Management
- Create new prompts
- View all saved prompts
- Delete prompts
- Duplicate existing prompts
- Copy prompt content easily
- Mark prompts as favorite
- Pin important prompts

### 🔍 Search & Filter
- Search prompts by title and content
- Filter prompts by category
- Sort prompts:
  - Newest
  - Oldest
  - A-Z
  - Z-A

### 🎨 User Interface
- Modern responsive UI
- Clean dashboard layout
- Dark mode support
- Drag and drop prompt organization

### 📂 Data Management
- Import prompts
- Export prompts
- Local storage support
- Backend API integration

---

## 🛠️ Technologies Used

### Frontend
- React.js
- TypeScript
- Vite
- Tailwind CSS
- Axios
- dnd-kit

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Tools
- Git
- GitHub
- VS Code
- Postman

---

## 📁 Project Structure


AI-Prompt-Library
│
├── frontend
│ ├── src
│ │ ├── components
│ │ ├── pages
│ │ ├── types
│ │ └── App.tsx
│ │
│ └── package.json
│
├── backend
│ ├── models
│ ├── routes
│ ├── server.js
│ └── package.json
│
└── README.md


---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/bablishirbhate/AI-Prompt-Library.git

Navigate into project folder:

cd AI-Prompt-Library
Frontend Setup

Go to frontend folder:

cd frontend

Install dependencies:

npm install

Run application:

npm run dev

Frontend will start on:

http://localhost:5173
Backend Setup

Go to backend folder:

cd backend

Install dependencies:

npm install

Create .env file:

PORT=5000

MONGO_URI=your_mongodb_connection_string

Start backend server:

npm run dev

Backend will run on:

http://localhost:5000
🔗 API Features

The backend provides APIs for:

Create Prompt
Get All Prompts
Update Prompt
Delete Prompt


🎯 Future Enhancements
User Authentication
AI Model Integration
Prompt Sharing
Cloud Database Support
Prompt History Management
AI Prompt Recommendation System
👩‍💻 Author

Babli Shirbhate
