import React from 'react';

export default function Contact() {
    return (
    <form style={{marginTop: '50px'}}>
      <div style={{textAlign: 'center'}}>
        <h1 style={{fontWeight: 'bold'}}>Contact Me</h1>
        <p>
          Phone Number: 763-XXX-XXXX
        </p>
      </div>

      <div style={{marginTop: '50px'}}>
      <h1 style={{fontWeight: 'bold', textAlign: 'center'}}>Send me an email</h1>
        <div id="emailForm-Contact" style={{fontWeight: 'bold', textAlign: 'center'}}>
          <input
            placeholder="Email"
            name="email"
            type="email"
            autoComplete="off" />
        </div>
      </div>

      <div style={{marginTop: '10px'}}>
        <div id="emailForm-Contact" style={{fontWeight: 'bold', textAlign: 'center'}}>
          <input
            style= {{width: '300pt', height: '300pt', fontSize: '14pt'}}
            placeholder="Message"
            name="message"
            type="message"
            autoComplete="off" />
        </div>
      </div>

    </form>
  );
}