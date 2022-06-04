import React from 'react';

export default function Home() {
  return (
    <div style={{
      textAlign: 'center',
    }}>
      <h1 
      style={{
              marginTop: '50px',
              fontSize: '40px',
              textAlign: 'center',
              fontWeight:'bold'
            }}
        >Welcome to my page!
      </h1>

      <p
      style={{
              textAlign: 'center',
              margin: '20px'
            }}
      >Navigate anywhere above to get started</p>
    </div>
  );
}