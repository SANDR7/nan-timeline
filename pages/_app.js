import '../styles/main.scss'
import 'tailwindcss/tailwind.css'
import { UserProvider } from '@auth0/nextjs-auth0';

function nanApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default nanApp
