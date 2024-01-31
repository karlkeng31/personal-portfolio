import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className='app__header app__flex'>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className='app__header-info'
    >
      <div className='app__header-badge'>
        <div className='badge-cmp app__flex'>
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className='p-text'>Hello, I am</p>
            <h1 className='head-text'>Ken</h1>
          </div>
        </div>

        <div className='tag-cmp app__flex'>
          <p className='p-text'>Web Developer</p>
          <p className='p-text'>Software Developer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className='app__header-img'
    >
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt='profile_circle'
        className='overlay_circle'
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-quotes'
    >
      <p className='p-text'>
        “If debugging is the process of removing software bugs, then programming
        must be the process of putting them in.” - Edsger Dijkstra
      </p>
      <p className='p-text'>
        “No matter which field of work you want to go in, it is of great
        importance to learn at least one programming language.” ― Ram Ray
      </p>
      <p className='p-text'>
        “Clean code always looks like it was written by someone who cares.” ―
        Robert C. Martin
      </p>
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
