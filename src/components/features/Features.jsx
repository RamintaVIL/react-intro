import style from './Features.module.css';

export function FeaturesBigOne() {
    return (
        <section className={style.featuresList}>
            <Feature
                icon="💡"
                title="Instant Server Start"
                description="On demand file serving over native ESM, no bundling required!"
            />
            <Feature
                icon="⚡️"
                title="Lightning Fast HMR"
                description="Hot Module Replacement (HMR) that stays fast regardless of app size."
            />
            <Feature
                icon="⚒️"
                title="Rich Features"
                description="Out-of-the-box support for TypeScript, JSX, CSS and more."
            />
            <Feature
                icon="📦"
                title="Optimized Build"
                description="Pre-configured Rollup build with multi-page and library mode support."
            />
            <Feature
                icon="🔩"
                title="Universal Plugins"
                description="Rollup-superset plugin interface shared between dev and build."
            />
            <Feature
                icon="🔑"
                title="Fully Typed APIs"
                description="Flexible programmatic APIs with full TypeScript typing."
            />
        </section>
    );
}

// Cia pirminis variantas. Siuo atveju buvo galima nieko ir nekeisti, nes kodo optimizavime nieko nelaimime
// export function Features() {
//     return (
//         <section className={style.featuresList}>
//             <div className={style.feature}>
//                 <div className={style.icon}>💡</div>
//                 <h2 className={style.title}>Instant Server Start</h2>
//                 <p className={style.description}>
//                     On demand file serving over native ESM, no bundling
//                     required!
//                 </p>
//             </div>
//             <div className={style.feature}>
//                 <div className={style.icon}>⚡️</div>
//                 <h2 className={style.title}>Lightning Fast HMR</h2>
//                 <p className={style.description}>
//                     Hot Module Replacement (HMR) that stays fast regardless of
//                     app size.
//                 </p>
//             </div>
//             <div className={style.feature}>
//                 <div className={style.icon}>⚒️</div>
//                 <h2 className={style.title}>Rich Features</h2>
//                 <p className={style.description}>
//                     Out-of-the-box support for TypeScript, JSX, CSS and more.
//                 </p>
//             </div>
//             <div className={style.feature}>
//                 <div className={style.icon}>📦</div>
//                 <h2 className={style.title}>Optimized Build</h2>
//                 <p className={style.description}>
//                     Pre-configured Rollup build with multi-page and library mode
//                     support.
//                 </p>
//             </div>
//             <div className={style.feature}>
//                 <div className={style.icon}>🔩</div>
//                 <h2 className={style.title}>Universal Plugins</h2>
//                 <p className={style.description}>
//                     Rollup-superset plugin interface shared between dev and
//                     build.
//                 </p>
//             </div>
//             <div className={style.feature}>
//                 <div className={style.icon}>🔑</div>
//                 <h2 className={style.title}>Fully Typed APIs</h2>
//                 <p className={style.description}>
//                     Flexible programmatic APIs with full TypeScript typing.
//                 </p>
//             </div>
//         </section>
// )};
