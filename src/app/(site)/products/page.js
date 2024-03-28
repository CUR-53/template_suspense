import { getSlowProducts } from '@/lib/data.service';
import styles from './page.module.css';
import { Suspense } from 'react';
import ProductsList from '@/components/products/productsList';

const Page = async () => {
  let products = await getSlowProducts();

  return (
    <div>
      <h1>Products {products.length}</h1>

      <Suspense fallback={<div>LOCAL LOADER LOADING</div>}>
        <ProductsList />
      </Suspense>
    </div>
  );
};
export default Page;
