import { Container } from "reactstrap";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Container>{props.children}</Container>
      <Footer/>
    </div>
  );
};

export default Layout;
