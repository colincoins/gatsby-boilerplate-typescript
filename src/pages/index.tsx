import React, { Component } from 'react'
import Header from '../components/Header/index';
import '@/styles/base.global';

interface IndexPageProps {
  headerTitle: string,
  headerValue: number
}

class IndexPage extends Component<IndexPageProps> {
  static defaultProps = {
    headerTitle: 'What is a header anyway',
    headerValue: 42,
  }

  public render() {
    return (
      <div>
        <Header
          title={this.props.headerTitle}
          value={this.props.headerValue}
        />
        <p>out of scope text</p>
      </div>
    )
  }
}

export default IndexPage;
