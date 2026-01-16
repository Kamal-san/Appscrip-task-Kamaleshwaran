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

        <meta property="og:title" content="Premium Fashion Products – Appscrip Store" />
        <meta property="og:description" content="Shop exclusive fashion catalog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://appscrip-task-kamaleshwaran.vercel.app/" />

        <link rel="canonical" href="https://appscrip-task-kamaleshwaran.vercel.app/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Product Listing – Appscrip Store",
              description: "Browse thousands of premium fashion products.",
              url: "https://appscrip-task-kamaleshwaran.vercel.app/",
              mainEntity: products?.map((p) => ({
                "@type": "Product",
                name: p.title,
                image: p.image,
                offers: {
                  "@type": "Offer",
                  price: p.price,
                  priceCurrency: "INR",
                },
              })),
            }),
          }}
        />
      </Head>

      <Header />
      <Discover />

      <ProductsNavBar
        totalItems={products?.length || 0}
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
            {Array.isArray(products) &&
              products.map((product) => (
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

export async function getStaticProps() {
  try {
    const productRes = await fetch("https://fakestoreapi.com/products?limit=20", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    const categoryRes = await fetch("https://fakestoreapi.com/products/categories", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    // Ensure JSON parsing doesn't break if HTML returned
    const products = await productRes.json().catch(() => []);
    const categories = await categoryRes.json().catch(() => []);

    return {
      props: {
        products: Array.isArray(products) ? products : [],
        categories: Array.isArray(categories) ? categories : []
      },
      revalidate: 30,
    };

  } catch (error) {
    console.error("STATIC BUILD FETCH ERROR:", error);

    return {
      props: {
        products: [],
        categories: []
      }
    };
  }
}
