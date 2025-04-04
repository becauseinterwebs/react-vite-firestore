# React + Vite + Firestore (Typescript)

This scaffolding template is designed to get a project using Vite, React and Firestore up and running quickly.

It does not include any CSS systems or frameworks such as Tailwind or Material UI.

To configure the Firestore connection:

- Open the ```/.env.development``` file
- Edit the values to match your Firestore setup
- When you are ready to publish to a production environment, copy your .env file to ```.env.production```

### Building for a specific environment

For development, just use the standard commands

```yarn dev``` or ```npm run dev```

For production, a script has been added to the package.json file:

```yarn build:prod``` or ```npm run build:prod```

This will set the environment file used for the build to ```.env.production```.

If you are hosting your project on Cloudflare (which I highly recommend...it's FREE) there is a script in the package.json for publishing to your Cloudflare account:

```yarn publish:prod``` or ```npm run publish:prod```

Just replace the ```CLOUDFLARE_ACCOUNT_ID``` with your token and change the ```--project-name``` variable to your project.