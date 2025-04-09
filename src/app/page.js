import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
export default function Home() {
  return (
    <>
      <Navbar />
      <main >
        <Header />
        <ProductList />

      </main>
      <Footer />

    </>
  );
}
