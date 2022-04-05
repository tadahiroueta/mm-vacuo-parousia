import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Footer() {
    const [isClicked, setIsClicked] = useState(false);
    const categories = require('../data/categories.json');
    const suppliers = require('../data/suppliers.json');
    
    const handleCopy = () => {
        setIsClicked(true);
        setInterval(() => setIsClicked(false), 5000);
    };
    
    return (
        <footer>
            <div className="link-column first-column">
                <h4 className="footer-firm">Div. Martins Martins I.E.R. Ltda</h4>
                <h4 className="footer-address">
                    Rua José Justino Pereira, 208 B. Água Fria<br />
                    CEP <span className='numbers'>02407-140</span> São Paulo – SP Brasil
                </h4>
                <h4 className="footer-email">
                    mmvacuo@mmvacuo.com.br
                    <CopyToClipboard text="mmvacuo@mmvacuo.com.br" onCopy={handleCopy}>
                        <img
                        className="copy"
                        src={`${process.env.PUBLIC_URL}/images/copy.png`}
                        alt="copy"
                        />
                    </CopyToClipboard>
                    {isClicked ? <span className="checkmark">✓</span> : null}
                </h4>
                <h4 className="footer-number">
                    <span className="numbers">(11) 98371-1367</span>
                    <a className='whatsapp-link' href='https://wa.me/5511983711367'>
                        <img
                            className="whatsapp-icon"
                            src={`${process.env.PUBLIC_URL}/images/whatsapp.png`}
                            alt='WhatsApp'
                        />
                    </a>
                </h4>
            </div>
            <nav className="link-column second-column">
                <h4><Link to='/'>Home</Link></h4>
                <h4><HashLink to="/#quem-somos">Quem Somos</HashLink></h4>
                <h4><HashLink to="/#contatar">Contatar</HashLink></h4>
                <h4><Link to='/produtos'>Produtos</Link></h4>
                <div className="link-group">
                    {categories.map(({ id, name }) => <h5><Link to={`/produtos/${id}/`} key={id}>{name}</Link></h5>)}
                </div>
            </nav>
            <nav className="link-column third-column">
                <h4><Link to="/representadas">Representadas</Link></h4>
                <div className="link-group">
                    {suppliers.map(({ id, name }) => <h5><Link to={`/representadas/${id}/`} key={id}>{name}</Link></h5>)}
                </div>
            </nav>
        </footer>
    );
}