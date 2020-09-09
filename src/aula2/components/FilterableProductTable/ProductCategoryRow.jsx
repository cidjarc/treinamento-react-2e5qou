import React from "react";

const ProductCategoryRow = props => {
    const { category } = props;
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
};

export default ProductCategoryRow;
