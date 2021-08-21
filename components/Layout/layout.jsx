import Header from "../Header/header";
import Footer from "../Footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
