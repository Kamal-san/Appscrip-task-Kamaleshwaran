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
  let products = [];
  let categories = [];

  try {
    const productsRes = await fetch(
      "https://fakestoreapi.com/products",
      { timeout: 8000 }
    );

    if (productsRes.ok) {
      products = await productsRes.json();
    }
  } catch (err) {
    console.error("Products API failed:", err.message);
  }

  try {
    const categoriesRes = await fetch(
      "https://fakestoreapi.com/products/categories",
      { timeout: 8000 }
    );

    if (categoriesRes.ok) {
      categories = await categoriesRes.json();
    }
  } catch (err) {
    console.error("Categories API failed:", err.message);
  }

  return {
    props: {
      products: Array.isArray(products) ? products : [],
      categories: Array.isArray(categories) ? categories : [],
    },
  };
}
