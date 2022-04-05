import { PropTypes } from "prop-types";

function ProductPreview({ productId }) {
    console.log(productId);
    const {
        name,
        supplierId,
        link
    } = require('../data/products.json').find((product) => product.id === productId);
    let supplierName = "";
    try {
        supplierName = require('../data/suppliers.json').find((eachSupplier) => eachSupplier.id === supplierId).name;
    } catch (error) {
        supplierName = "";
    }
    return (
        <div className="product-preview">
            <a 
                className="product-link" 
                href={link ? link : `${process.env.PUBLIC_URL}/contatar-mm/`}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="product-wallpaper"
                    src={`${process.env.PUBLIC_URL}/images/${productId}.jpg`}
                    alt={productId}
                />
                <div className="preview-text" to={`/produto/${productId}/`}>
                    <h3 className='preview-title'>{name}</h3>
                    {supplierName ? <h4 className="preview-supplier">{supplierName}</h4> : null}
                </div>
            </a>
        </div>
    );
}

ProductPreview.propTypes = { productId: PropTypes.string.isRequired };

export default ProductPreview;

