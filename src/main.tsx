/**
 * NOTE: Uncomment FirebaseProvider entries once you have configured your Firebase connection
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
//import FirebaseProvider from '@/providers/FirebaseProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<FirebaseProvider>*/}
      <App />
    {/*</FirebaseProvider>*/}
  </StrictMode>,
)
