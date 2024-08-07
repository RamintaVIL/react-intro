import style from './Sponsor.module.css';

export function Sponsor() {
    return (
        <section className={style.sponsors}>
            <a className={style.btn} href="#">
                Sponsor Vite
            </a>
            <a className={style.btn} href="#">
                Sponser WHO?
            </a>
        </section>
    );
}
