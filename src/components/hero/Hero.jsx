import './Hero.css';
import logo from '/vite.svg';

export function Hero() {
    const imgStyle = {
        height: '24rem',
        width: '100%',
    };
    const title =
        Math.random() > 0.5
            ? 'Vite next generation frontend tooling'
            : 'Finito!!!';

    return (
        <section className="hero">
            <div className="textContent">
                <h1 className="title">{title}</h1>
                <p className=" description">
                    Get ready for a development environment that can finally
                    catch up with you.
                </p>
                <div className="btnList">
                    <a className="btn" href="#">
                        Get started
                    </a>
                    <a className="btn" href="#">
                        Why Vite?
                    </a>
                    <a className="btn" href="#">
                        View on Github
                    </a>
                    <a className="btn" href="#">
                        ⚡️ ViteConf 24
                    </a>
                </div>
            </div>
            <img src={logo} style={imgStyle} alt="Vite image" />
        </section>
    );
}
