import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import SuppliersPreview from "../components/SuppliersPreview";

export default function Suppliers() {
    const supplierIds = require('../data/suppliers.json').map(({ id }) => id);
    let supplierI = -1;
    let wallpaperI = -1;
    return (
        <main className="suppliers">
            <SuppliersPreview />
            <div className='supplier-banners'>
                {supplierIds.map((supplierId) => {
                    supplierI++;
                    return (
                        <Banner 
                            subject={supplierId} 
                            isEven={supplierI % 2 === 0} 
                            key={supplierId}
                        />
                    );
                })}
            </div>
            <div className="supplier-wallpapers" hidden={true}>
                {supplierIds.map(supplierId => {
                    wallpaperI++;
                    return (
                        <Link to={`/representadas/${supplierId}`} key={supplierId}>
                            <img 
                                className='banner-wallpaper'
                                style={{position: wallpaperI * 200 + 490 + 50}}
                                src={`${process.env.PUBLIC_URL}/images/${supplierId}-banner.jpg`} 
                                alt={supplierId}
                            />
                        </Link>            
                    );
                })}
            </div>
        </main>
    );
}