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

----------------------

If you receive CORS error you need to update Firebase Storage CORS settings.
To update your Firebase Storage CORS settings, you'll need to create or modify the `cors.json` file and then apply it using the Firebase CLI. Here's a quick reminder of the steps:

### Steps to Update CORS Settings

1. **Create a `cors.json` File**  
   This file defines the CORS (Cross-Origin Resource Sharing) rules for your Firebase Storage bucket. Here's an example of what a `cors.json` file might look like:

   ```json
   [
     {
       "origin": ["*"], // Replace "*" with specific origins if needed
       "method": ["GET", "POST", "PUT", "DELETE"],
       "maxAgeSeconds": 3600,
       "responseHeader": ["Content-Type"]
     }
   ]
   ```

   - **`origin`**: Specifies the domains allowed to access your resources. Use `"*"` for any domain, or specify particular domains like `["https://example.com"]`.
   - **`method`**: Defines the HTTP methods that can be used (GET, POST, etc.).
   - **`maxAgeSeconds`**: The duration (in seconds) for which the browser can cache the CORS response.
   - **`responseHeader`**: Specifies which headers can be exposed to the client.

2. **Apply the CORS Configuration**  
   Once your `cors.json` file is ready, you'll need to apply it to your Firebase Storage bucket using the Firebase CLI.

   - Open your terminal and navigate to the folder containing the `cors.json` file.
   - Run the following command to apply the CORS settings to your Firebase Storage bucket:

   ```bash
   gsutil cors set cors.json gs://your-bucket-name
   ```

   Replace `your-bucket-name` with the actual name of your Firebase Storage bucket. For example, if your bucket is named `example.com`, you would run:

   ```bash
   gsutil cors set cors.json gs://example.com
   ```

3. **Verify the CORS Configuration**  
   To check that your CORS settings have been successfully applied, you can run:

   ```bash
   gsutil cors get gs://your-bucket-name
   ```

   This will display the current CORS settings for your bucket.

### Recap:
1. Create or update the `cors.json` file with your desired settings.
2. Run `gsutil cors set cors.json gs://your-bucket-name` to apply the configuration.
3. Verify the configuration with `gsutil cors get`.
