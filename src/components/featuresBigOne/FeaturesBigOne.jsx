import style from './FeaturesBigOne.module.css';

export function Features() {
    return (
        <section className={style.featuresList}>
            <div className={style.feature}>
                <div className={style.icon}>💡</div>
                <h2 className={style.title}>Instant Server Start</h2>
                <p className={style.description}>
                    On demand file serving over native ESM, no bundling
                    required!
                </p>
            </div>
            <div className={style.feature}>
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
            </div>
        </section>
    );
}
