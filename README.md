# 🚀 My Next.js Website

A professional multi-page website built using **Next.js (App Router)** with TypeScript.

This project demonstrates modern routing, layouts, metadata handling, error boundaries, and responsive UI design.

---

## 📌 Features

- ✅ Next.js App Router
- ✅ TypeScript (TSX)
- ✅ Global Layout
- ✅ Professional Card UI Design
- ✅ SEO Metadata Support
- ✅ Client-side Navigation
- ✅ Redirect after Signup
- ✅ Global Error Handling
- ✅ Responsive Design
- ✅ Clean Folder Structure

---

## 📂 Project Structure

my-app/
│
├── app/
│   ├── layout.tsx        # Root layout (HTML + Body)
│   ├── globals.css       # Global styles
│   ├── page.tsx          # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── signup/
│   │   └── page.tsx
│   ├── error.tsx         # Global error handler
│
├── public/
├── package.json
└── README.md

---

## 🛠 Technologies Used

- Next.js 16+
- React 18+
- TypeScript
- CSS (Global Styling)
- App Router

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git

Navigate into the project folder:

cd my-app

Install dependencies:

npm install

Run the development server:

npm run dev

Open in browser:

http://localhost:3000
🧩 Pages Included
Route	Description
/	Home Page
/about	About Page
/signup	Signup Page with redirect
Global Error	Error boundary handling
🔄 Signup Redirect Logic

After submitting the signup form, users are redirected to the home page using:

router.push("/")
❗ Error Handling

This project includes a global error boundary using:

app/error.tsx

It catches runtime errors and displays a user-friendly message.

📈 SEO Metadata Example

Each page supports metadata like:

export const metadata = {
  title: "About Us",
  description: "Learn more about our company",
};
🎨 UI Design

Centered card layout

Flexbox-based vertical & horizontal alignment

Responsive design

Clean professional spacing

Modern typography

🚀 Future Improvements

Authentication system

Database integration

API routes

Dark mode

Deployment to Vercel

Tailwind CSS integration