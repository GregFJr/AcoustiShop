import { NextResponse } from 'next/server';
import data from '../../../../data.json'; 


interface Product {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description?: string; 
}

interface ErrorResponse {
  error: string;
}


export async function GET(request: Request, { params }: { params: { id: string } }): Promise<NextResponse<Product | ErrorResponse>> {
  const { id } = params;
  const product = data.find((item) => item.id.toString() === id);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
