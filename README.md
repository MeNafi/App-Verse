 ## 📱 AppVerse – Using React.js

A dynamic and interactive app store-style web application built with **React.js,** powered by **custom JSON data,** and using **React Router** for seamless routing management

### 🎯 Live Demo: https://appverse05.netlify.app/
## [![Netlify](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=netlify&logoColor=white)](https://appverse05.netlify.app/) 


  
## 🧩 Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript"/>
  <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC"/>
  <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge"/> 
</p>


## 🚀 Project Overview

AppVerse is a modern **React-based** web application where users can explore **apps, view details,** and manage installations with a **clean and responsive UI.**

#### 🔍 This project focuses on:

- Component-based architecture
- JSON-based dynamic data rendering
- State management
- Interactive UI experience



## ✨ Key Features

- 🚀 **Dynamic App Data Rendering**  
  Apps are loaded from a custom JSON file and displayed dynamically.

- 🔍 **Live Search Functionality**  
  Case-insensitive search with “No App Found” state.

- 📊 **App Details & Chart**  
  Detailed info with rating visualization using Recharts.

- 📱 **Fully Responsive Design**  
  Optimized for desktop, tablet, and mobile devices.

- 📥 **Install / Uninstall System**
  Save apps in LocalStorage and manage installations.

 - 🔽 **Sort by Downloads**
   High → Low and Low → High sorting.
   
 - 📱 **Fully Responsive Design**
   Works across mobile, tablet, and desktop.
   
 -  🎨 Clean & Modern UI
   Built with Tailwind CSS & DaisyUI.

  - 📂 **Organized Folder Structure**  
     Scalable and well-structured project architecture.


## 🗃️ Data Handling (Custom JSON)

Instead of using an **external API,** this project uses a **custom local JSON file** to manage apps data.

#### 🗄️ Stored App Information

Each app object includes:

- 📱 App Title
- 🏢 Company Name
- 📥 Downloads
- ⭐ Rating & Reviews
- 📝 Description
- 🖼️ Image
- 📊 Rating Distribution

### ⚡ How It Works

- Data is imported directly from the JSON file.
- Apps are rendered dynamically using map().
- React state hooks (useState, useEffect) manage UI and updates.
- LocalStorage handles app installation and persistence.
- Changes reflect instantly without page reload.

> ✅ Simple structure  
> ✅ No external API dependency  
> ✅ Fast and efficient rendering
> ✅ Easy to maintain
