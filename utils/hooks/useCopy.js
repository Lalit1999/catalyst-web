"use client"

import { useState } from 'react';

const useCopy = () => {
    const [copied, setCopied] = useState(false);

    const copy = async text => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return { copy, copied };
}

export default useCopy ;