import { PropTypes } from 'prop-types';
import ProductPreview from './ProductPreview';

function ProductGroup({
    groupId,
    exceptionId,
    header
}) {
    let group = require('../data/subCategories.json').find((subCategory) => subCategory.id === groupId);
    if (!group) group = require('../data/suppliers.json').find((supplier) => supplier.id === groupId);
    const { productIds } = group;
    if (header === "sub-category-name") header = group.name;
    return (
        <div className='product-group'>
            <h2 className='sub-header'>{header}</h2>
            <div className='product-previews'>
                {productIds.filter((id) => id !== exceptionId).map((productId) => <ProductPreview productId={productId} key={productId} />)}
            </div>
        </div>
    );
}

ProductGroup.propTypes = { 
    groupId: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    exceptionId: PropTypes.string
};

export default ProductGroup;