import React, { useState, useEffect } from 'react';

const Drag = () => {
  
  const [position, setPosition] = useState({ x: 0, y: 0 });

  
  useEffect(() => {
    
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Add event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: '100px',
        height: '100px',
        backgroundColor: 'lightblue',
        border: '1px solid black',
        borderRadius: '100%',
        cursor: 'pointer'
      }}
    >
      
    </div>
  );
};

export default Drag;
