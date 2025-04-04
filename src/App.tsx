import reactLogo from './assets/react.svg'
import firestoreLogo from './assets/firestore.png';
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="header">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://console.firebase.google.com/" target="_blank">
            <img src={firestoreLogo} className="logo firestore" alt="Firestore logo" />
          </a>
        </div>
        <h1>Vite + React + Firestore</h1>
        <div className="promo">
          <b>Because...Interwebs!</b>
          <a className="promo-link" href="https://github.com/becauseinterwebs">GitHub</a> | <a className="promo-link" href="https://becauseinterwebs.com">Web</a>
        </div>
        <div className="card">
          <p>This scaffolding template is designed to get a project using Vite, React and Firestore up and running quickly.</p>
          <p>It does not include any CSS systems or frameworks such as Tailwind or Material UI.</p>
        </div>
      </div>
      <div className="list">
        <p>To configure the Firestore connection:</p>
        <ul>
          <li>Open the <b><i>/.env.development</i></b> file</li>
          <li>Edit the values to match your Firestore setup</li>
          <li>When you are ready to publish to a production environment, copy your .env file to <b><i>.env.production</i></b></li>
        </ul>
      </div>
      <div className="list">
        <p><b>Building for a specific environment</b></p>
        <p>For development, just use the standard commands</p>
        <p><b>yarn dev</b> or <b>npm run dev</b></p>
        <p>For production, a script has been added to the <b>package.json</b> file:</p>
        <p><b>yarn build:prod</b> or <b>npm run build:prod</b></p>
        <p>This will set the environment file used for the build to <b>.env.production</b></p>
      </div>
      <div>
        If you are hosting your project on <b>Cloudflare</b> (which I highly recommend...it's FREE) there is a 
        script in the package.json for publishing to your Cloudflare account:
        <p><b>yarn publish:prod</b> or <b>npm run publish:prod</b></p>
        Just replace the <b>CLOUDFLARE_ACCOUNT_ID</b> with your token and change the <b>--project-name</b> variable to your project.
      </div>
    </>
  )
}

export default App
