import style from './Features.module.css';

export function Feature(params) {
    // const icon = params.icon;
    // const title = params.title;
    // const description = params.description;

    // destruktarizavimas
    const {icon, title, description} = params;

    return (

        <div className={style.feature}>
            <div className={style.icon}>{icon}</div>
            <h2 className={style.title}>{title}</h2>
            <p className={style.description}>{description}</p>
        </div>
    );
}
