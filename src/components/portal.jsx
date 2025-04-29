'use client'; // Required for DOM interaction

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export function Portal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Portal needs the document object, which is only available client-side.
    // Set mounted to true after the initial client render.
    setMounted(true);

    // Cleanup function
    return () => setMounted(false);
  }, []);

  // Don't render anything on the server or before hydration
  // Render the portal content into document.body if mounted
  return mounted 
    ? createPortal(children, document.body) 
    : null;
} 