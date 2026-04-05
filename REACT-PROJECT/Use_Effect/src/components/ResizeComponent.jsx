import React, { useState, useEffect } from 'react'

function ResizeComponent() {

    const [windowWidth, setWindowwidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowwidth(window.innerWidth);
      console.log("Event Listener Added");

      window.addEventListener('resize', handleResize);
    
      return () => {
        console.log("Event Listener Removed");
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    //It will run only on first render
    
  return (
    <div>
      <h1>Window width: {windowWidth}px</h1>
    </div>
  );
}

export default ResizeComponent
