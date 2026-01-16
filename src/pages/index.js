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
          content="Explore premium clothing, accessories, and handcrafted fashion items. Shop curated high-quality products with customization options."
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
              "name": "Product Listing – Appscrip Store",
              "description":
                "Browse thousands of premium fashion products with customization options.",
              "url": "https://appscrip-task-kamaleshwaran.vercel.app/",
              "mainEntity": products?.map((p) => ({
                "@type": "Product",
                "name": p.title,
                "image": p.image,
                "offers": {
                  "@type": "Offer",
                  "price": p.price,
                  "priceCurrency": "INR",
                },
              })),
            }),
          }}
        />
      </Head>

      <Header />
      <Discover />

      <ProductsNavBar
        totalItems={3425}
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
            {(products || []).map((product) => (
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
    const productsRes = await fetch("https://fakestoreapi.com/products");
    const categoriesRes = await fetch("https://fakestoreapi.com/products/categories");

    // Ensure valid JSON
    const products = await productsRes.json();
    const categories = await categoriesRes.json();

    return {
      props: {
        products: products || [],
        categories: categories || [],
      },
      revalidate: 60, // ISR: update automatically every 60 seconds
    };
  } catch (error) {
    console.error("BUILD ERROR:", error);

    return {
      props: {
        products: [],
        categories: [],
      },
      revalidate: 60,
    };
  }
}
