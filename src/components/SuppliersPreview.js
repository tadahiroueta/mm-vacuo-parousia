import { Link } from "react-router-dom";

export default function SuppliersPreview() {
    const supplierIds = require('../data/suppliers.json').map(({ id }) => id);
    return (
        <div className="suppliers-preview">
            <h2 className="header">Representadas</h2>
            <div className="logos">
                {supplierIds.map((supplierId) => (
                    <Link 
                        className="logo-link"
                        to={`/representadas/${supplierId}/`} 
                        key={supplierId}
                    >
                        <img
                            className='logo' 
                            src={`${process.env.PUBLIC_URL}/images/${supplierId}-logo.jpg`} 
                            alt={supplierId}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}