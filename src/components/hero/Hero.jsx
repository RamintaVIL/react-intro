import logo from '/vite.svg';

export function Hero() {
    const imgStyle = {
        height: '15rem',
    };
    const title =
        Math.random() > 0.5
            ? 'Vite next generation frontend tooling'
            : 'Finito!!!';

    return (
        <section>
            <div>
                <h1>{title}</h1>
                <p>
                    Get ready for a development environment that can finally
                    catch up with you.
                </p>
                <div>
                    <a href="#">Get started</a>
                    <a href="#">Why Vite?</a>
                    <a href="#">View on Github</a>
                    <a href="#">⚡️ ViteConf 24</a>
                </div>
            </div>
            <img src={logo} style={imgStyle} alt="Vite image" />
        </section>
    );
}
