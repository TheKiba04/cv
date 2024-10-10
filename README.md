# CV Website

This project is a personal CV website built using modern web technologies. It aims to showcase professional experience, skills, education, and tools in a sleek and responsive design. The website can be easily extended or customized and supports deployment via Firebase.

## Technologies Used

- **Vite**: Fast build tool and development server.
- **TypeScript**: Type safety and modern JavaScript features.
- **ESLint**: Linting for maintaining code quality.
- **Firebase**: Hosting and deployment platform.

## Available Scripts

In the project directory, you can run the following commands:

- **`yarn go`**  
  Starts the Vite development server. This will spin up the local development environment where you can preview changes live.

- **`yarn build`**  
  Compiles TypeScript into JavaScript and bundles the application for production. The final output will be optimized for deployment.

- **`yarn lint`**  
  Runs ESLint on all `.ts` and `.tsx` files to ensure code quality. It checks for code style errors and unused directives.

- **`yarn lint:fix`**  
  Runs ESLint in "fix" mode, which automatically fixes linting errors when possible.

- **`yarn preview`**  
  Runs the production build in preview mode to check how the website will behave in a live environment before deployment.

- **`yarn deploy`**  
  Builds the project and deploys the website to Firebase hosting.

## Deployment

The website is deployed using Firebase. After running the build, use the following command to deploy the site:

```bash
yarn deploy
