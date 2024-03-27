import { getSlowProducts } from '@/lib/data.service';
import styles from './page.module.css';


const Page = async () => {

    let products = await getSlowProducts()

    return (
        <div>
            <h1>Products {products.length}</h1>
        </div>
    )
};
export default Page