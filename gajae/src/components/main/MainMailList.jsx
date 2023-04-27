import { useState } from 'react';
import './mainMailList.css';

const MainMailList = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted email:', email);
  };

  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <form className="mailForm" onSubmit={handleSubmit}>
        <div className="mailInputContainer">
          <input type="email" placeholder="Your Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default MainMailList;
