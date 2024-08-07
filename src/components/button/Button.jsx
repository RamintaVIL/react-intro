import style from './Button.module.css';

export function Button(params) {
    return (
        <a className={style.btn} href={params.url}>
            {params.text}
        </a>
    );
}
