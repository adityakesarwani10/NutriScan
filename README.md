# NutriScan - Barcode Scanner

NutriScan is a web-based barcode scanner that helps users scan food items and retrieve their nutritional information using **QuaggaJS**. This project is designed for hackathons and real-world applications in food tracking and analysis.

## 🚀 Features
- **Live Barcode Scanning** using QuaggaJS
- **Supports Multiple Barcode Formats** (EAN, Code 128, etc.)
- **Real-Time Barcode Detection**
- **Fully Responsive Web Application**

## 🛠️ Installation & Setup
Follow these steps to set up the project locally:

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/NutriScan.git
cd NutriScan
```

### **2️⃣ Install Dependencies** (for Vite + React version)
```sh
npm install
```

### **3️⃣ Start the Development Server**
```sh
npm run dev
```

### **4️⃣ Build for Production**
```sh
npm run build
```

## 📡 Deploying to GitHub Pages
To deploy the project on GitHub Pages:

1. Open `package.json` and add:
```json
"homepage": "https://yourusername.github.io/NutriScan"
```
2. Run the following commands:
```sh
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```
3. Enable **GitHub Pages** from the repository settings and set the branch to `main` or `gh-pages`.

## 🔍 How It Works
1. Open the web app.
2. Point your camera at a barcode.
3. NutriScan will automatically detect and display the barcode.
4. (Optional) Fetch product details from an API.

## ⚡ Technologies Used
- **React + Vite** (Frontend Framework)
- **QuaggaJS** (Barcode Scanner)
- **Tailwind CSS** (Styling)
- **GitHub Pages** (Deployment)

## 📜 License
This project is open-source under the **MIT License**.

---
**👨‍💻 Developed by Aditya**

