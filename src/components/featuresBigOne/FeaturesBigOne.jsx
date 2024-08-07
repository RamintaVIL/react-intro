import style from './FeaturesBigOne.module.css';

export function FeaturesBigOne(params) {
    // galima ir iskarti, kad gamintu masyva ir grazintu
    return (
        <section className={style.featuresList}>
            {params.data.map((item, index) => (
                <div key={index} className={style.feature}>
                    <div className={style.icon}>{item.icon}</div>
                    <h2 className={style.title}>{item.title}</h2>
                    <p className={style.description}>{item.description}</p>
                </div>
            ))}
        </section>
    );
}

// const blocks = [];
// for (const item of params.data) {
//     blocks.push(
//         <div className={style.feature}>
//             <div className={style.icon}>{item.icon}</div>
//             <h2 className={style.title}>{item.title}</h2>
//             <p className={style.description}>{item.description}</p>
//         </div>
//     );
// }

// galime ir taip pasirasyti. Turime tuscia masyva ir supushiname i masyva.
// for (let i = 0; i < data.length; i++) {
//          blocks.push(
//         <div className={style.feature}>
//             <div className={style.icon}>{item.icon}</div>
//             <h2 className={style.title}>{item.title}</h2>
//             <p className={style.description}>{item.description}</p>
//         </div>
//     );
// }

// kitas uzrasymo budas, is karto gamina objektu masyva.
// const blocks = params.data.map(item => (
//   <div className={style.feature}>
//             <div className={style.icon}>{item.icon}</div>
//             <h2 className={style.title}>{item.title}</h2>
//             <p className={style.description}>{item.description}</p>
//   </div>
// )),

// return (
//     <section className={style.featuresList}>
//         {blocks}

// {
/* <div className={style.feature}>
                <div className={style.icon}>⚡️</div>
                <h2 className={style.title}>Lightning Fast HMR</h2>
                <p className={style.description}>
                    Hot Module Replacement (HMR) that stays fast regardless of
                    app size.
                </p>
            </div>
            <div className={style.feature}>
                <div className={style.icon}>⚒️</div>
                <h2 className={style.title}>Rich Features</h2>
                <p className={style.description}>
                    Out-of-the-box support for TypeScript, JSX, CSS and more.
                </p>
            </div>
            <div className={style.feature}>
                <div className={style.icon}>📦</div>
                <h2 className={style.title}>Optimized Build</h2>
                <p className={style.description}>
                    Pre-configured Rollup build with multi-page and library mode
                    support.
                </p>
            </div>
            <div className={style.feature}>
                <div className={style.icon}>🔩</div>
                <h2 className={style.title}>Universal Plugins</h2>
                <p className={style.description}>
                    Rollup-superset plugin interface shared between dev and
                    build.
                </p>
            </div>
            <div className={style.feature}>
                <div className={style.icon}>🔑</div>
                <h2 className={style.title}>Fully Typed APIs</h2>
                <p className={style.description}>
                    Flexible programmatic APIs with full TypeScript typing.
                </p>
            </div> */
// }
// {
/* </section>
    );
} */
