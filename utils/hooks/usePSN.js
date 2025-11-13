"use client"

import { PT_Sans_Narrow } from "next/font/google";

const pt_sans_narrow = PT_Sans_Narrow({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const usePSN = () => pt_sans_narrow.className ;

export default usePSN ;