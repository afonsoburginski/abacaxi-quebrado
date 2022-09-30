import React from 'react';
import classNames from 'classnames';
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset footer-social">
        <li>
          <a href="https://www.linkedin.com/company/confinamento-abacaxi-quebrado/about/">
            <FaLinkedinIn/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/abacaxiquebrado/">
            <FaInstagram/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;