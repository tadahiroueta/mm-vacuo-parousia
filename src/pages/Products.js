import Banner from "../components/Banner";
import SynergyRoulette from "../components/SynergyRoulette";

export default function Products() {
    const categoryIds = require('../data/categories.json').map(({ id }) => id);
    let categoryI = -1;

    return (
        <main className="products">
            <SynergyRoulette />
            <div className="category-banners">
                {categoryIds.map((id) => {
                    categoryI++;
                    return (
                        <Banner 
                            subject={id} 
                            isEven={categoryI % 2 === 0} 
                            key={id}
                        />
                    );
                })}
            </div>
        </main>
    );
} 