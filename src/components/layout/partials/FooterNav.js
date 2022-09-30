import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Início</Link>
        </li>
        <li>
          <Link to="#0">Sobre</Link>
        </li>
        <li>
          <Link to="#0">Contato</Link>
        </li>
        <li>
          <Link to="#0">Trabalhe-Conosco</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;