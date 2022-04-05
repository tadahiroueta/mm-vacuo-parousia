import { useParams } from "react-router-dom";
import ProductGroup from "../components/ProductGroup";

export default function Category() {
    const { categoryId } = useParams();
    const { name, subCategoryIds } = require('../data/categories.json').find((category) => category.id === categoryId);
    return (
        <main className="category">
            <h1 className="header">{name}</h1>
            <div>
                {subCategoryIds.map((subCategoryId) => (
                    <ProductGroup 
                        groupId={subCategoryId}
                        key={subCategoryId}
                        header='sub-category-name'
                    />
                ))}
            </div>
        </main>
    );
}