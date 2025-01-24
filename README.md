# BlogVault

BlogVault is a blog-related website built with **Next.js 15**, featuring authentication with **Kinde Auth**. Users can browse blogs, view details, and access a protected profile page that requires authentication.

## Features
- 🚀 **Next.js 15** for fast and efficient rendering
- 🔑 **Authentication** using Kinde Auth (Google login supported)
- 🏠 **Home Page** displaying blog titles fetched from a mock API
- 📄 **Blog Details Page** with dynamic routing
- 🔒 **Protected Profile Page** (redirects to login if unauthenticated)
- 🎨 **Styled with Tailwind CSS** for a clean UI

## Tech Stack
- **Frontend:** Next.js 15, React, Tailwind CSS
- **Authentication:** Kinde Auth
- **API Data:** JSONPlaceholder (for mock blog posts)

   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
   Your app will be running at `http://localhost:3000`

```

## Authentication Setup
BlogVault uses **Kinde Auth** to manage authentication. If a user is not logged in, they are redirected to the login page when accessing the profile.


```

## Deployment
You can deploy this project on **Vercel** using the following steps:
1. Push your code to GitHub.
2. Connect your GitHub repository with Vercel.
3. Add environment variables in Vercel.
4. Deploy your project with a single click!



