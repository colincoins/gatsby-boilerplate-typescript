import React, { SFC } from 'react';
import styles from './page.module.scss';

export interface HeaderProps {
  title: string;
  value: number;
}

const Header: SFC<HeaderProps> = (props) => {
  <div className={styles['header']}>
    <p>
      {props.title}
      <br />
      the value is {props.value}
    </p>
  </div>
}

Header.defaultProps = {
  title: 'this is default prop',
  value: 100,
}

export default Header;
