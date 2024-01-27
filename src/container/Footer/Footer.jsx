import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  /*  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  }; */

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card '>
          <img src={images.email} alt='email' />
          <a href='mailto:hello@micael.com' className='p-text'>
            hello@micael.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='phone' />
          <a href='tel:+1 (123) 456-7890' className='p-text'>
            +1 (123) 456-7890
          </a>
        </div>
      </div>
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input
            className='p-text'
            type='text'
            placeholder='Your Name'
            name='username'
          />
        </div>
        <div className='app__flex'>
          <input
            className='p-text'
            type='email'
            placeholder='Your Email'
            name='email'
          />
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            name='message'
          />
        </div>
        <button type='button'>Submit</button>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
