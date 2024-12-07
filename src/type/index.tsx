export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        id: number;
        name: string;
        image: string;
        creationAt: string;
        updatedAt: string;
    };
    image: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    quantity: number;
};

export type TokenResponse = {
    access_token: string;
    refresh_token: string;
};
