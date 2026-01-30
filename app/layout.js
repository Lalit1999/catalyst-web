import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';

import ContextWrapper from './ContextWrapper.js' ;
import './globals.css' ;
import './tiptap.css' ;

import {  Poppins } from "next/font/google";
  
const poppins = Poppins({
    subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata = {
    title: "Catalyst Clinical Services",
    description: "Web app for Catalyst Clinical Services Pvt. Ltd.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`body ${poppins.className}`}>
                <ContextWrapper>{children}</ContextWrapper>
                <ToastContainer />
            </body>
        </html>
    );
}
