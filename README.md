# 📝 To-Do List App

A simple and efficient To-Do List application built with **Vite**, **React**, and **TypeScript**. This app allows users to manage their tasks by adding, completing, filtering, and deleting to-dos with a clean and intuitive interface.

## 📋 Table of Contents

- [📖 Description](#-description)
- [🚀 Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [📦 Installation](#-installation)
- [🔧 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [📫 Contact](#-contact)
- [🖼️ Screenshots](#-screenshots)

## 📖 Description

The **To-Do List App** is a straightforward task management tool designed to help users keep track of their daily activities. Built with modern web technologies, the app ensures a responsive and seamless user experience across various devices and browsers.

## 🚀 Features

- **Add Tasks:** Easily add new to-dos with a simple input field.
- **Complete Tasks:** Mark tasks as completed to keep track of your progress.
- **Delete Tasks:** Remove tasks that are no longer needed.
- **Filter Tasks:** View all tasks, only active tasks, or only completed tasks.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Persistent Storage:** Tasks are stored locally, ensuring they remain after page reloads.

## 🛠️ Technologies Used

- **[Vite](https://vitejs.dev/):** A fast frontend build tool.
- **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that compiles to plain JavaScript.
- **[CSS Modules](https://github.com/css-modules/css-modules):** For scoped and modular CSS styling.
- **[React Hooks](https://reactjs.org/docs/hooks-intro.html):** For managing state and side effects in functional components.

## 📦 Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/jlg777/todo-list-app.git
   cd todo-list-app

   ```

2. **Install Dependencies**

Ensure you have Node.js installed. Then, install the necessary packages:

```bash
npm install
# or
yarn install
```

3. **Start the Development Server**

```bash
npm run dev
# or
yarn dev
```

The app should now be running at http://localhost:5173 (default Vite port). Open this URL in your browser to view the application.

## 🔧 Usage

Once the development server is running:

1. Add a New Task:

- Enter the task description in the input field.
- Press Enter or click the Add button to create a new to-do.

2. Mark a Task as Completed:

- Click the checkbox next to a task to toggle its completion status.

3. Delete a Task:

- Click the Delete button (usually represented by a trash can icon) to remove the task from the list.
  Filter Tasks:

4. Use the filter buttons (All, Active, Completed) to view tasks based on their status.

## 📂 Project Structure

Here's an overview of the project's file structure:

```arduino
Copiar código
todo-list-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Todo.tsx
│   │   └── Todos.tsx
│   ├── mocks/
│   │   └── mockTodos.ts
│   ├── utils/
│   │   └── const.ts
│   ├── definitions/
│   │   └── definitions.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tsconfig.json
├── package.json
├── vite.config.ts
└── README.md
```

- components/: Contains reusable React components like Todo, Todos, and Footer.
- mocks/: Includes mock data (mockTodos.ts) for initial to-do items.
- utils/: Houses utility constants and types (const.ts).
- definitions/: Defines TypeScript interfaces and types (definitions.ts).
- App.tsx: The root React component that manages the overall state and logic.
- main.tsx: Entry point of the React application.
- index.css: Global CSS styles.
- Configuration Files: tsconfig.json for TypeScript, vite.config.ts for Vite, and package.json for project dependencies and scripts.

## 🤝 Contributing

Contributions are welcome! Follow these steps to contribute to the project:

1. Fork the Repository

   Click the Fork button at the top-right corner of the repository page.

2. Clone Your Fork

```bash
git clone https://github.com/jlg777/todo-list-app.git
cd todo-list-app
Create a New Branch
```

```bash
git checkout -b feature/nueva-funcionalidad
```

4.Make Your Changes

- Implement your feature or fix the bug.

5. Commit Your Changes

```bash
git commit -m "Añade nueva funcionalidad para..."
```

6. Push to Your Fork

```bash
git push origin feature/nueva-funcionalidad
```

7. Open a Pull Request

Go to the original repository and open a pull request describing your changes.

## 📜 License

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## 📫 Contact

Si tienes alguna pregunta, sugerencia o comentario, no dudes en contactarme:

Email: proyectojlg777@gmail.com
GitHub: @jlg777
LinkedIn: Tu Nombre
🖼️ Screenshots
📱 Vista de Tareas Activas

✅ Vista de Tareas Completadas

🌐 Aplicación en Modo Móvil

¡Gracias por usar la To-Do List App! Esperamos que te ayude a gestionar tus tareas de manera eficiente y sencilla.
