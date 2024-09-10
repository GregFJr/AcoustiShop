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

export default function Speakers() { 
  const { data: products, error } = useSWR<Product[]>('/api/post', fetcher);

  if (error) {
    return <div>Error: Failed to fetch products</div>;
  }

  if (!products) {
    return <div>Loading...</div>;
  }

  // Filter specific products by id (example with ids 1, 2, and 3)
  const product5 = products.find((product) => product.id === 5);
  const product6 = products.find((product) => product.id === 6);


  return (
    <div>
      <section className='headphones-hero'>
        <h1>Headphones</h1>
      </section>

      <section className='products'>
        {product6 && (
          <div className='p1'>
            <div className='product-descript'>
            <h6>{product6.new ? 'New Product': ''}</h6>
            <h1>{product6.name}</h1>
            <p>{product6.description}</p>
            <Link href={`/products/${product6.id}`}>
            <button>see product</button>
            </Link>
            </div>
            <img src={product6.image.desktop} alt={product6.name} />
          </div>
        )}
        {product5 && (
          <div className='p2'>
            <div className='product-descript'>
              <h6>{product5.new ? 'New Product' : ''}</h6>
            <h1>{product5.name}</h1>
            <p>{product5.description}</p>
            <Link href={`/products/${product5.id}`}>
            <button>see product</button>
            </Link>
            </div>
            <img src={product5.image.desktop} alt={product5.name} />
          </div>
        )}

        <div className='audio-categories'>
          <div>
          <img src="/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="thumdnail headphones" />
            <h5>Headphones</h5>
            <a href="">Shop</a>
          </div>
          <div>
          <img src="/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="thumdnail speakers" />
          <h5>Speakers</h5>
          <a href="">Shop</a>
          </div>
          <div>
          <img src="/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="thumdnail earphones" />
          <h5>Earphones</h5>
          <a href="">Shop</a>
          </div>
        </div>

        <div className='headphone-page-script'>
          <div className='audio-script'>
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

      </section>
    </div>
  );
}
