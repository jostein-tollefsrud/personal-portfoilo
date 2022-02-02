import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      {/* <span>Her kommer navbar</span> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
