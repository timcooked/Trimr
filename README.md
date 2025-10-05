# 🌐 Trimr - A Modern URL Shortener

Trimr is a sleek, minimal, and fast URL shortener that transforms long, messy URLs into clean, shareable links.  
Built with a modern stack for performance, reliability, and a beautiful dark-themed interface.  

---

## 🚀 Tech Stack

**Frontend**
- [Next.js 15](https://nextjs.org/)  
- [React 18](https://react.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [React Hook Form](https://react-hook-form.com/)  

**Backend**
- [Go](https://go.dev/)  
- [MongoDB](https://www.mongodb.com/)  

🔗 **Backend Repository:** *[Add link to backend repo here]*  

---

## ✨ Features

- ⚡ Shorten URLs instantly with a single click  
- 📋 Copy shortened links directly to clipboard  
- 🎨 Clean, responsive, and modern dark UI  
- 🚀 Fast + reliable (Go-powered backend)  

---

## 🛠️ Getting Started

### Prerequisites
Make sure you have the following installed:  
- [Node.js](https://nodejs.org/) v18+  
- npm or yarn  
- Go backend running on **port 8080**  
- MongoDB  

---

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/timcooked/Trimr.git
   cd Trimr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open your browser at 👉 [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Backend Setup

Before using the frontend, make sure the backend API is up and running.  

1. Clone and set up the backend repository  
2. Run it on: **http://localhost:8080**  
3. Ensure MongoDB is running and connected  

---

## 📡 API Endpoints Used

- **POST** `/shorten` → Create a shortened URL  
- **GET** `/url/:shortCode` → Get URL details  
- **GET** `/redirect/:shortCode` → Redirect to original URL  

---

## 🎯 Usage

1. Enter your long URL in the input field  
2. Click **“Shorten URL”**  
3. Copy your shortened link and share it anywhere  

---

## 📂 Project Structure

```
Trimr/
├── app/
│   ├── page.jsx       # Main page
│   ├── layout.jsx     # Root layout
│   └── globals.css    # Styles
├── public/
├── .env.local
├── package.json
└── README.md
```

---

## 👨‍💻 Author

**timcooked**  
Building cool things with code ✨  

---

## 📜 License

This project is open source. Feel free to fork, modify, and contribute!
