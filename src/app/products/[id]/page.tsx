"use client";

import { useParams } from 'next/navigation';
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

export default function ProductPage() {
  const { id } = useParams();
  const { data: product, error } = useSWR<Product>(id ? `/api/post/${id}` : null, fetcher);

  if (error) {
    return <div>Error: Failed to fetch product</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className='single-product'>
      <img src={`/${product.image.desktop}`} alt={product.name} />
      <div className='single-product-info'>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h5>$ {product.price}</h5>
      <div className='add-cart'>
      <input 
    type="number" 
    id="quantity" 
    name="quantity" 
    min="1" 
    max={product.includes[0].quantity} 
    defaultValue="1"
  />
  <button>add to cart</button>
      </div>
      </div>
      </section>
    </div>
  );
}


