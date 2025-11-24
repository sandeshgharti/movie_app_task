# SG Stream - Movie App Task

A React-based movie streaming application built with TypeScript, Tailwind CSS, and Vite. This project aims to provide a user-friendly interface for browsing and discovering movies.

## Key Features & Benefits

- **Movie Browsing:** Discover and explore a wide range of movies.
- **React Components:** Well-structured React components for maintainability.
- **Tailwind CSS:** Utilizes Tailwind CSS for responsive and visually appealing design.
- **TypeScript:** Implements TypeScript for type safety and improved code quality.
- **Vite:** Fast build tool and development server powered by Vite.
- **Redux Toolkit:** State management with Redux Toolkit.
- **Tanstack React Query:** Data fetching and caching with Tanstack React Query.
- **Scroll To Top:** Scroll to top functionality on page change.

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

- **Node.js:** Version 18 or higher.
- **pnpm:** Preferred package manager. If you don't have it, install it globally using `npm install -g pnpm`.

## Installation & Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sandeshgharti/movie_app_task.git
    cd movie_app_task
    ```

2.  **Install dependencies using pnpm:**

    ```bash
    pnpm install
    ```

3.  **Start the development server:**

    ```bash
    pnpm dev
    ```

    This will start the application on `http://localhost:<port>` (usually 3000 or 5173).

## Usage Examples & API Documentation

This project fetches movie data from an external API (details to be added as they are implemented). The core components such as `Card`, `Rows`, and `Hero` are designed to display movie information in an organized and user-friendly manner.

(Further API documentation will be added as the project evolves and API integrations are finalized.)

## Configuration Options

The project is configured using `vite.config.ts` and `tailwind.config.js`. You can adjust settings such as the port number, API endpoints, and Tailwind CSS theme by modifying these files.

No environment variables are currently required, but they may be introduced in future updates.

## Project Structure

```
├── .gitignore
├── README.md
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
└── public/
    ├── vite.svg
└── src/
    ├── App.tsx
    ├── assets/
    │   └── react.svg
    ├── components/
    │   ├── Card.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── NavBar.tsx
    │   ├── Rows.tsx
    │   └── ScrollToTopOnPageChange.tsx
```

## Contributing Guidelines

Contributions are welcome! To contribute to this project:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Write tests for your changes.
5.  Ensure all tests pass.
6.  Submit a pull request with a clear description of your changes.

## License Information

This project does not currently have a specified license. All rights are reserved by the owner, sandeshgharti. Please contact the owner for licensing information.

## Acknowledgments

This project utilizes several open-source libraries and frameworks, including:

- React
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Redux Toolkit
- Tanstack React Query

We express our gratitude to the developers and maintainers of these technologies.
