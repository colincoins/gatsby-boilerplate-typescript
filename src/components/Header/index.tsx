import * as React from 'react'
import styles from './header.module.scss'

class Header extends React.PureComponent {
  render() {
    return (
      <div className={styles['header']}>
      {/* <div> */}
      {/* <div>   */}
        This is the heade!!r
      </div>
    );
  }
}
export default Header;
