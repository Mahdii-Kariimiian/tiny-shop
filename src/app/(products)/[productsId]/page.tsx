import React from "react";

const ProductsId = ({ params }: { params: { productsId: string } }) => {
    return <div>Products Number {params.productsId}</div>;
};

export default ProductsId;
