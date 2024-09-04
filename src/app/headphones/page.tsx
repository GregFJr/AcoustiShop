"use client";

import useSWR from 'swr';

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

export default function Headphones() { 
  const { data: products, error } = useSWR<Product[]>('/api/post', fetcher);

  if (error) {
    return <div>Error: Failed to fetch products</div>;
  }

  if (!products) {
    return <div>Loading...</div>;
  }

  // Filter specific products by id (example with ids 1, 2, and 3)
  const product2 = products.find((product) => product.id === 2);
  const product3 = products.find((product) => product.id === 3);
  const product4 = products.find((product) => product.id === 4);


  const xx99MarkTwo = products.find((product) => product.slug === 'xx99-mark-two-headphones');
  const xx99MarkOne = products.find((product) => product.slug === 'xx99-mark-one-headphones');



  return (
    <div>
      <section className='headphones-hero'>
        <h1>Headphones</h1>
      </section>

      <section className='products'>
        {product4 && (
          <div className='p1'>
            <div className='product-descript'>
            <h6>{product4.new ? 'New Product': ''}</h6>
            <h1>{product4.name}</h1>
            <p>{product4.description}</p>
            <button>see product</button>
            </div>
            <img src={product4.image.desktop} alt={product4.name} />
          </div>
        )}
        {product3 && (
          <div className='p2'>
            <div className='product-descript'>
              <h6>{product3.new ? 'New Product' : ''}</h6>
            <h1>{product3.name}</h1>
            <p>{product3.description}</p>
            <button>see product</button>
            </div>
            <img src={product3.image.desktop} alt={product3.name} />
          </div>
        )}
        {product2 && (
          <div className='p3'>
          <div className='product-descript'>
            <h6>{product2.new ? 'New Product': ''}</h6>
          <h1>{product2.name}</h1>
          <p>{product2.description}</p>
          <button>see product</button>
          </div>
          <img src={product2.image.desktop} alt={product2.name} />
          </div>
        )}

        <div className='audio-categories'>
          <div>
          <img src="../../assets/shared/desktop/image-category-thumbnail-headphones.png" alt="thumdnail headphones" />
            <h5>Headphones</h5>
            <a href="">Shop</a>
          </div>
          <div>
          <img src="../../assets/shared/desktop/image-category-thumbnail-speakers.png" alt="thumdnail speakers" />
          <h5>Speakers</h5>
          <a href="">Shop</a>
          </div>
          <div>
          <img src="../../assets/shared/desktop/image-category-thumbnail-earphones.png" alt="thumdnail earphones" />
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
          <img src="../../assets/shared/desktop/image-best-gear.jpg" alt="best gear image" />
        </div>

      </section>
    </div>
  );
}
