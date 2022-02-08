import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="stickyFooter">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
