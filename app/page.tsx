import React from 'react';
import { client } from '../lib/client';
import { Product as ProductComponent, FooterBanner, HeroBanner } from '../componenet';
//import { Product, Banner } from 'ecommerce-sanity/schemaTypes/index';
import { Product, Banner } from '../types/sanity';
const Home = async () => {
  const productsQuery = '*[_type == "product"]';
  const bannerQuery = '*[_type == "banner"]';

  const products: Product[] = await client.fetch(productsQuery);
  const bannerData: Banner[] = await client.fetch(bannerQuery);

  return (
    <div>
      <HeroBanner heroBanner={bannerData?.length ? bannerData[0] : null} />

      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>Speakers — There are many variations of passages</p>
      </div>

      <div className="products-container">
        {products?.map((product: Product) => (
          <ProductComponent key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData?.[0] || null} />
    </div>
  );
};

export default Home;