import { HashLink } from "react-router-hash-link";

export default function Navigation() {
    const links = [
        '/',
        '/#quem-somos',
        '/produtos',
        '/representadas'
    ];
    const linkTexts = [
        'Home',
        'Quem Somos',
        'Produtos',
        'Representadas'
    ];
    let linkI = -1;
    return (
        <div className="navigation">
            <ul className="navigation-list">
                {links.map(link => {
                    linkI++;
                    return (
                        <li className="navigation-item" key={link}>
                            <h4 className="navigation-text">
                                <HashLink className="navigation-link" to={link}>{linkTexts[linkI]}</HashLink>
                            </h4>
                        </li>
                    );
                })}
                <li className="navigation-button">
                    <h4 className="navigation-button-text">
                        <HashLink to='/#contatar'>Contatar</HashLink>
                    </h4>
                </li>
            </ul>
        </div>
    );
}