import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Home({ products, categories }) {
  return (
    <>
      <Header />

      <main className="main-container">

        <div className="layout">

          <Filters categories={categories} />

          <section className="products">
            {products.map(product => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json());
  const categories = await fetch("https://fakestoreapi.com/products/categories").then(res => res.json());

  return {
    props: { products, categories }
  };
}
