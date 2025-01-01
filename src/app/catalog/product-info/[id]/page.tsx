import ProductInfo from "@/components/ProductInfo";
import { PathParams, Product } from "@/model/models";
import { ProductUtils } from "@/utils/utils";

interface ProductInfoProps {
    params: Promise<PathParams>
}

const ProductDetailInfo: React.FC<ProductInfoProps> = async ({ params }) => {
    const { id } = await params;
    const product: Product | undefined = ProductUtils.getProductById(id);
    return (
        <ProductInfo product={product as Product}/>
    );
}

export default ProductDetailInfo;