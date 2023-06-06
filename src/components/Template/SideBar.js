import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Huichao HUANG</h2>
        <p><a href="mailto:superhuang64@gmail.com">superhuang64@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Huichao. I am a self-taught full-stack developer. I completed my <a href="https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&edition=2023&id=936"> MSc in Digital Sociology</a> at the University of Edinburgh last autumn. I am also a <a href="https://sicss.io/2022/edinburgh/">SICSS</a> Alumni.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Huichao HUANG <Link to="/">superhuang.com</Link> 2023.</p>
    </section>
  </section>
);

export default SideBar;
