import { NextPage } from 'next';
import Header, { HeaderProps } from './header';
import Footer from './footer';
import Container from './container';

type Props = {
  headerProps: HeaderProps;
};

const PageBase: NextPage<Props> = ({ children, headerProps }) => {
  return (
    <Container>
      <Header props={headerProps.props} />
      {children}
      <Footer />
    </Container>
  );
};

export default PageBase;
export type { Props as PageBaseProps };
