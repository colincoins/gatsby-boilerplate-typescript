import React, { SFC } from 'react';
import styles from './page.module.scss';

export interface HeaderProps {
  title: string;
  value: number;
}

const Header: SFC<HeaderProps> = (props) => {
  return (
    <div className={styles['header']}>
      <h1>
        {props.title}
        <br />
        the value is {props.value}
      </h1>
    </div>
  );
}

Header.defaultProps = {
  title: 'this is default prop',
  value: 100,
}

export default Header;
