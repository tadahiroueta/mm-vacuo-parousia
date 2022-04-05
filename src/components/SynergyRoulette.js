import { Link } from "react-router-dom";

export default function SynergyRoulette() {
    const categories = require('../data/categories.json');
        return (
        <div className="synergy-roulette">
            {categories.map(({ id, name }) => (
                <Link 
                    className="roulette-box" 
                    to={`/produtos/${id}/`}
                    key={id}
                >
                    <h4
                        id={id}
                        className="roulette-text"
                    >{name}</h4>
                </Link>
            ))}
        </div>
    );
}