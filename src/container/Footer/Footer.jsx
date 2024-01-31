/* import { useRef } from 'react';
import emailjs from '@emailjs/browser';
 */
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  /* const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5dfc83g',
        'template_pl9pnmj',
        form.current,
        'qU5NURGH6gxo1YwLT'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('Messege sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  }; */

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card '>
          <img src={images.email} alt='email' />
          <a href='mailto:hello@micael.com' className='p-text'>
            hello@karlg.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='phone' />
          <a href='tel:+1 (123) 456-7890' className='p-text'>
            (+63) 917-123-4567
          </a>
        </div>
      </div>
      <form
        /*  ref={form}
        onSubmit={sendEmail} */
        className='app__footer-form app__flex'
      >
        <div className='app__flex'>
          <input
            className='p-text'
            type='text'
            placeholder='Your Name'
            name='user_name'
          />
        </div>
        <div className='app__flex'>
          <input
            className='p-text'
            type='email'
            placeholder='Your Email'
            name='user_email'
          />
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            name='message'
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <div className='copyright'>
        <p className='p-text'>@2020 Karl Ken. G.</p>
        <p className='p-text'>All rights reserved</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
