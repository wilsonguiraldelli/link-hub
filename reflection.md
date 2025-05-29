# The use of AI in this project

The use of AI helped me a lot in the development. I used ChatGPT to generate logos, fallback images, and create the application's branding.

For development, I used the Cursor IDE, which is a fork of VSCode with integrated AI. I used it as a consultant when I got stuck with unexpected errors or styles that weren't working as expected. One example is that the login repository doesn't use the fetchHttpClient due to a cycle dependency, which the AI helped me find and fix. It also helped with creating simple components like the drawer navigation. Another area where AI was helpful was in the next-auth configuration for the credentials provider, which was tricky to implement using a REST emulator (that's why the login is a GET request - in a real scenario, it would be a POST). The tests either were done using the AI.

If I had more time, I would focus on additional features like profile editing, Google OAuth login integration, and improving the landing page theme personalization.
