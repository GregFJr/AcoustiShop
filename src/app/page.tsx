"use client";

import useSWR from 'swr';
import Link from 'next/link';

// Define TypeScript interfaces for your product data
interface ImageSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IncludeItem {
  quantity: number;
  item: string;
}

interface Gallery {
  first: ImageSet;
  second: ImageSet;
  third: ImageSet;
}

interface OtherProduct {
  slug: string;
  name: string;
  image: ImageSet;
}

interface Product {
  id: number;
  slug: string;
  name: string;
  image: ImageSet;
  category: string;
  categoryImage: ImageSet;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludeItem[];
  gallery: Gallery;
  others: OtherProduct[];
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Home() {

    const { data: products, error } = useSWR<Product[]>('/api/post', fetcher);
  
    if (error) {
      return <div>Error: Failed to fetch products</div>;
    }
  
    if (!products) {
      return <div className='bouncing-loader'>
        <div></div>
        <div></div>
        <div></div>
      </div>;
    }

    const heroProduct = products.find((product) => product.id === 4);
    const productAd1 = products.find((product) => product.id === 6);
    const productAd2 = products.find((product) => product.id === 5);
    const productAd3 = products.find((product) => product.id === 1);

  return (
    <div>
      <section className="product-hero">
        {heroProduct && (
          <div>
            <h6>{heroProduct.new ? "New Product" : ""}</h6>
            <h1 className="hero-h1">{heroProduct.name}</h1>
            <p>{heroProduct.description}</p>
            <Link href={`/products/${heroProduct.id}`}>
              <button>See Product</button>
            </Link>
          </div>
        )}
      </section>

    <main className='home-main'>
      <section className="home-catergories">
        <div className="audio-categories">
          <div>
            <img
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt="thumdnail headphones"
            />
            <h5>Headphones</h5>
            <a href="">Shop</a>
          </div>
          <div>
            <img
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt="thumdnail speakers"
            />
            <h5>Speakers</h5>
            <a href="">Shop</a>
          </div>
          <div>
            <img
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt="thumdnail earphones"
            />
            <h5>Earphones</h5>
            <a href="">Shop</a>
          </div>
        </div>
      </section>

      <section className='audio-ad-sect'>
        <section className='main-ad'>
          {productAd1 && (
            <div className='ma1'>
              <h1>{productAd1.name}</h1>
              <p>{productAd1.description}</p>
              <Link href={`/products/${productAd1.id}`}>
                <button>See Product</button>
              </Link>
            </div>
          )}
        </section>
      </section>

      <section className='audio-ad2-sect'>
        <section className='main-ad2'>
          {productAd2 && (
            <div className='ma2'>
              <h1>{productAd2.name}</h1>
              <Link href={`/products/${productAd2.id}`}>
                <button>See Product</button>
              </Link>
            </div>
          )}
        </section>
      </section>

      <section className='audio-ad3-sect'>
        <section className='main-ad3'>
          {productAd3 && (
            <div className='ma3'>
              <div className='ma3-img'>
                <img src="/assets/home/desktop/image-earphones-yx1.jpg" alt="" />
              </div>
              <div className='ma3-descript'>
              <h1>{productAd3.slug}</h1>
              <Link href={`/products/${productAd3.id}`}>
                <button>See Product</button>
              </Link>
              </div>
            </div>
          )}
        </section>
      </section>

      <div className='home-headphone-page-script'>
          <div className='home-audio-script'>
           <h1>Bringing you the <span>best</span> audio gear</h1> 

            <p>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones,
            earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
            rooms available for you to browse and experience a wide range of our products. Stop by our store
            to meet some of the fantastic people who make Audiophile the best place to buy your portable
            audio equipment.
            </p>
          </div>
          <img src="/assets/shared/desktop/image-best-gear.jpg" alt="best gear image" />
        </div>
</main>
    </div>
  );
}
