import { NextPage } from 'next';
import Header from './header';
import { HeaderProps } from '../pages/api/getHeader';
import Footer from './footer';
import Container from './container';

type Props = {
  headerProps: HeaderProps;
};

const PageBase: NextPage<Props> = ({ children, headerProps }) => {
  // console.log('PageBase: ', headerProps);
  return (
    <Container>
      <Header props={headerProps} />
      {children}
      <Footer />
    </Container>
  );
};

export default PageBase;
export type { Props as PageBaseProps };
