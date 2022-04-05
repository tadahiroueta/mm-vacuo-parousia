import { useParams } from "react-router-dom";
import SupplierInformation from '../components/SupplierInformation';
import ProductGroup from '../components/ProductGroup';

export default function Supplier() {
    const { supplierId } = useParams();
    return (
        <main className="supplier">
            <SupplierInformation />
            <div className="offered">
                <h2 className="header">Produtos fornecidos</h2>
                <ProductGroup groupId={supplierId} />
            </div>
        </main>
    );
}