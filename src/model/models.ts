export type Product = {
    _id: string;
    imageName: string;
    title: string;
    price: number;
    description: string;
    detailedDescription: string;
};

export type PathParams = {
    id: string;
}

export type ProductCheckoutInfo = {
    id: string;
    count: number;
}
