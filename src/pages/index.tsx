import * as React from 'react';
import { Header } from '../components/Header/index';

interface IndexPageProps {
  headerTitle: string,
  headerValue: number
}

const IndexPage: React.SFC<IndexPageProps> = (props) => {
  return (
    <div>
      <Header
        title={props.headerTitle}
        value={props.headerValue}
      />
    </div>
  )
}

IndexPage.defaultProps = {
  headerTitle: "What is a header anyway",
  headerValue: 42
}

export default IndexPage;
