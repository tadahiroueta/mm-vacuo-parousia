import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Banner({ subject, isEven }) {
    let isSupplier = true;
    let subjectData = require('../data/suppliers.json').find((supplier) => subject === supplier.id);
    if (typeof subjectData === 'undefined') {
        isSupplier = false;
        subjectData = require('../data/categories.json').find(({ id }) => subject === id);
    }
    const {
        id,
        name,
        description
    } = subjectData;

    return (
        <div className={`banner-container${isEven ? '' : ' right-side'} ${isSupplier ? 'supplier-banner' : 'product-banner'}`}>
            <Link to={isSupplier ? `/representadas/${id}/` : `/produtos/${id}/`}>
                <img
                    className='banner-background'
                    src={`${process.env.PUBLIC_URL}/images/${id}${isSupplier ? "-banner" : ""}.jpg`}
                    alt={id}
                />
                <h3 className='banner-title'>
                    <span className='half-highlight'>{name}</span>
                </h3>
                <h4 className='banner-description'>{description}</h4>
            </Link>
        </div>
    );
}

Banner.propTypes = {
    subject: PropTypes.string.isRequired,
    isEven: PropTypes.bool.isRequired
}

export default Banner;