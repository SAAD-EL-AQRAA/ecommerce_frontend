// types/sanity.ts

export interface Product {
  _id: string;
  _type: string;
  name: string;
  slug: {
    _type: string;
    current: string;
  };
  image: Array<{
    _key: string;
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }>;
  price: number;
  details?: string;
  description?: string;
}

export interface Banner {
  _id: string;
  _type: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  buttonText?: string;
  product?: string;
  desc?: string;
  smallText?: string;
  midText?: string;
  largeText1?: string;
  largeText2?: string;
  discount?: string;
  saleTime?: string;
}