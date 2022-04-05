export default function LandingBanner() {
    return (
        <div className="landing-banner" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/world-map.jpg)`}}>
            <img
                className="landing-logo"
                src={`${process.env.PUBLIC_URL}/images/mm-vacuo-logo-vector.png`}
                alt="MM Vacuo Logo"
            />
            <h1 className="landing-mm">M&M</h1>
            <h1 className="landing-vacuo">Vácuo</h1>
            <h3 className="landing-slogan">Sua melhor opção em equipamentos científicos U.H.V.</h3>
        </div>
    );
}