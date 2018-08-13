import * as React from 'react';
import * as styles from './page.module.scss';

export interface HeaderProps {
  title: string;
  value: number;
}

export class Header extends React.PureComponent<HeaderProps> {
  static defaultProps = {
    title: 'this is a default prop',
    value: 100
  }
  render() {
    return (
      <div className={styles['header']}>
        <p>
          {this.props.title}
          <br/>
          the value is {this.props.value}
        </p>
      </div>
    );
  }
}
