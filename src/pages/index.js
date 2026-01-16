import { useState } from "react";
import Head from "next/head";

import Header from "../components/Header";
import Discover from "../components/Discover";
import ProductsNavBar from "../components/ProductsNavBar";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import styles from "../components/ProductGrid.module.css";

export default function Home({ products, categories }) {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <>
      <Head>
        <title>Explore Premium Fashion Products – Appscrip Store</title>
        <meta
          name="description"
          content="Explore premium clothing, accessories, and handcrafted fashion items."
        />
        <link
          rel="canonical"
          href="https://appscrip-task-kamaleshwaran.vercel.app/"
        />
      </Head>

      <Header />
      <Discover />

      <ProductsNavBar
        totalItems={products.length}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      <main className="main-container">
        <div className={showFilters ? "layout" : "layout full"}>
          {showFilters && <Filters categories={categories} />}

          <section
            className={
              showFilters
                ? styles.products
                : `${styles.products} ${styles.full}`
            }
          >
            {products.length === 0 ? (
              <p>No products available</p>
            ) : (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              ))
            )}
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const [productsRes, categoriesRes] = await Promise.all([
      fetch("https://fakestoreapi.com/products"),
      fetch("https://fakestoreapi.com/products/categories"),
    ]);

    if (!productsRes.ok || !categoriesRes.ok) {
      throw new Error("External API failed");
    }

    const products = await productsRes.json();
    const categories = await categoriesRes.json();

    return {
      props: {
        products: Array.isArray(products) ? products : [],
        categories: Array.isArray(categories) ? categories : [],
      },
    };
  } catch (error) {
    console.error("SSR ERROR:", error);

    return {
      props: {
        products: [],
        categories: [],
      },
    };
  }
}
