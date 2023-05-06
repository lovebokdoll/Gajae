import { useState } from 'react';
import './mainMailList.css';
import { emailSubscribe } from '../../service/main/mainpage';

const MainMailList = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted email:', email);

    const emailParameter = {
      email: email,
    };
    const sendSubscribeEmail = async () => {
      const response = await emailSubscribe(emailParameter);
      console.log(response.data);
    };
    sendSubscribeEmail();
  };

  return (
    <>
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
      <div style={{ height: '30px' }}></div>
    </>
  );
};

export default MainMailList;
