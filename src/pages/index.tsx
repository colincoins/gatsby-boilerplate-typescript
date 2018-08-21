import React, { SFC } from 'react'
import Header from '../components/Header/index';
import '@/styles/base.global';

interface IndexPageProps {
  headerTitle: string,
  headerValue: number
}

const IndexPage: SFC<IndexPageProps> = (props) => {
  return <div>
      <Header title={props.headerTitle} value={props.headerValue} />
    </div>
}

IndexPage.defaultProps = {
  headerTitle: "What is a header anyway",
  headerValue: 42
}

export default IndexPage;
