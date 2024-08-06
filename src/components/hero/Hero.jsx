import style from './Hero.module.css';
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
        <section className={style.hero}>
            <div className={style.textContent}>
                <h1 className={style.title}>{title}</h1>
                <p className={style.description}>
                    Get ready for a development environment that can finally
                    catch up with you.
                </p>
                <div className={style.btnList}>
                    <a className={style.btn} href="#">
                        Get started
                    </a>
                    <a className={style.btn} href="#">
                        Why Vite?
                    </a>
                    <a className={style.btn} href="#">
                        View on Github
                    </a>
                    <a className={style.btn} href="#">
                        ⚡️ ViteConf 24
                    </a>
                </div>
            </div>
            <img src={logo} style={imgStyle} alt="Vite image" />
        </section>
    );
}
