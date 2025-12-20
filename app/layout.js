import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from 'react-toastify';

import ContextWrapper from './ContextWrapper.js' ;
import './globals.css' ;
import './tiptap.css' ;

import { Inter, Lexend, Poppins } from "next/font/google";
  
const poppins = Poppins({
    subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700', '800'],
});
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend', // Define a CSS variable
})
const inter = Inter({
    subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})
export const metadata = {
    title: "Catalyst Clinical Services",
    description: "Web App created by Myarth Tech ( https://myarth.in )",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`body ${poppins.className} ${lexend.variable} ${inter.variable}`}>
                <ContextWrapper>{children}</ContextWrapper>
                {/* <ToastContainer /> */}
            </body>
        </html>
    );
}
