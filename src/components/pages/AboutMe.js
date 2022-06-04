import React from 'react';

export default function About() {
    return (
      <div style={{margin: '50px'}}>
        <div>
        <p style={{fontSize: '40px', fontWeight: 'bold'}}>Personal Info</p>
        <h1 style={{marginTop: '50px', fontSize: '30px'}}>
          My name is Carolyn Ngo. I have previously enrolled to SCTCC, NHCC, and St.Kates and graduated with an Associate's of Art degree at NHCC.
        </h1>
        <h1 style={{marginTop: '25px', fontSize: '30px'}}>
          My future plan is to work as a front-end web developer.
        </h1>
        </div>
      <div>
        <p style={{marginTop: '50px', fontSize: '40px', fontWeight: 'bold'}}>Hobbies</p>
        <ul>
          <li>
            Collecting vinyl records
          </li>
          <li>
            Thrifting
          </li>
          <li>
            Digital drawing
          </li>
        </ul>
      </div>
    </div>
  );
}