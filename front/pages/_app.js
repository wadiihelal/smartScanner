import { AppProps } from 'next/app';
import Navbar from '../src/components/Navbar';
import '../styles/globals.css';

const Layout = ({ children }) => <div>{children}</div>;

export default function MyApp({ Component, pageProps }){
	return (
		<Layout>
      <Navbar/>
			<Component {...pageProps} />
		</Layout>
	);
}