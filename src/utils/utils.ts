import products from '@/data/products.json';

const getProductById = (id: string) => {
    return products.find(product => product._id === id);
};

const getAllProducts = () => {
    return products;
};

export const ProductUtils = {
    getProductById,
    getAllProducts,
};
