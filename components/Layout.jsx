import Footer from './Footer';
import Navbar from './Navbar';
import Container from './Container';

const Layout = ({ children }) => {
  return (
    <div className="stickyFooter">
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
