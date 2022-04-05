import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
  const [isClicked, setIsClicked] = useState(false);

  const handleCopy = () => {
    setIsClicked(true);
    setInterval(() => setIsClicked(false), 5000);
  };

  return (
    <div className="contact">
      <a id="contatar" className="anchor" />
      <h2 className="header">Contatar</h2>
      <div className="contact-content">
        <div className="contact-left">
          <h3 className="home-subheader">MM Vácuo</h3>
          <h4 className="contact-firm">Div. Martins Martins I.E.R. Ltda</h4>
          <h4 className="contact-address">
            Rua José Justino Pereira, 208 B. Água Fria<br />
            CEP <span className='numbers'>02407-140</span> São Paulo – SP Brasil
          </h4>
          <h4 className="contact-email">
            mmvacuo@mmvacuo.com.br
            <CopyToClipboard text="mmvacuo@mmvacuo.com.br" onCopy={handleCopy}>
                <img
                className="copy"
                src={`${process.env.PUBLIC_URL}/images/copy-black.png`}
                alt="copy"
                />
            </CopyToClipboard>
            {isClicked ? <span className="checkmark">✓</span> : null}
          </h4>
          <h4 className="contact-number numbers">
            (11) 98371-1367
            <a 
              className="whatsapp" 
              href="https://wa.me/5511983711367"
            >
              <img
                className="whatsapp-icon"
                src={`${process.env.PUBLIC_URL}/images/whatsapp-black.png`}
                alt='WhatsApp'
              />
            </a>
          </h4>
        </div>
        <iframe 
          className="contact-map"
          title="Rua José Justino Pereira, 208 B. Água Fria"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.39775170114!2d-46.62559018510048!3d-23.48217878472227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef64f4a3f8305%3A0x3149086700e96ba1!2sR.%20Jos%C3%A9%20Justino%20Pereira%2C%20208%20-%20%C3%81gua%20Fria%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002407-140%2C%20Brazil!5e0!3m2!1sen!2sus!4v1648657417940!5m2!1sen!2sus" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}