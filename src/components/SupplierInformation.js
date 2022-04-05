import { useParams } from "react-router-dom";

export default function SupplierInformation() {
    const { supplierId } = useParams();
    const {
        name,
        description,
        link
    } = require('../data/suppliers.json').find((supplier) => supplier.id === supplierId);
    return (
        <div className="supplier-information">
            <div className="square-image-container">
                <img 
                    className="square-image"
                    src={`${process.env.PUBLIC_URL}/images/${supplierId}-logo.jpg`} 
                    alt={name}
                />
            </div>
            <div className="text-square">
                <h2 className="header">{name}</h2>
                <p className="supplier-description">{description}</p>
                <h3 className="read-more"><a href={link}>Leia mais</a></h3>
            </div>
        </div>
    );
}