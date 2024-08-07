import { Button } from '../button/Button';
import style from './Sponsor.module.css';

export function Sponsor() {
    return (
        <section className={style.sponsors}>
            <Button url="#" text="Sponsor Vite" />
            <Button url="#" text="Sponser WHO?" />
        </section>
    );
}
