export default function About() {
    return (
        <div className="about">
            <a id="quem-somos" className="anchor" />
            <h2 className="header">Quem Somos</h2>
            <img 
                className="about-image"
                src={`${process.env.PUBLIC_URL}/images/wilson.jpg`} 
                alt='Wilson'
            />
            <div className="about-outer-text">
                <div className="about-text">
                    <h2 className="home-subheader">Quem Somos</h2>
                    <p className="about-description">
                        Com mais de 30 anos experiência em Equipamentos e Sistemas com tecnologia de Vácuo no Brasil . A M&M Vácuo traz para o Brasil a melhor linha de Equipamentos técnico-científicos e U.H.V. Ultra Alto Vácuo e consumíveis. Representamos diversas empresas Americanas & Europeias líder de mercado em seu segmento.
                    </p>
                </div>
            </div>
        </div>
    );
}