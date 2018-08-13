import * as React from 'react';
import { Header } from '../components/Header/index';

interface IndexPageProps {
  title: string,
  value: number
}

const IndexPage: React.SFC<IndexPageProps> = (props) => {
  return (
    <div>
      <Header
        title={props.title}
        value={props.value}
      />
    </div>
  )
}

IndexPage.defaultProps = {
  title: "What is a header anyway",
  value: 42
}

export default IndexPage;
