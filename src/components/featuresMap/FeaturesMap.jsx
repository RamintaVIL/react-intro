
import style from './Features.module.css';
import { convertFeatureDataToComponent } from './convertFeatureDataToComponent';

// export function FeaturesMap(params) {
//     const blocks = [];

//     for (let i = 0; i< params.list.length; i++){
//         const item = params.list[i];
//         blocks.push(
//         <Feature key={i}
//                 icon={item.icon}
//                 title={item.title}
//                 description={item.description}
//             />
//         );
//     }
//     return (
//         <section className={style.featuresList}>
//           {blocks}  
//         </section>
//     );
// }

// for of ciklas
// export function FeaturesMap(params) {
//     const blocks = [];
//     let i = 0;
//     for (const item of params.lost) {
//         blocks.push(
//         <Feature key={i++}
//                 icon={item.icon}
//                 title={item.title}
//                 description={item.description}
//             />
//         );
//     }
//        return (
//         <section className={style.featuresList}>
//           {blocks}  
//         </section>
//     );
// }

// map versija
// export function FeaturesMap(params) {
//        return (
//         <section className={style.featuresList}>
//           {params.list.map(({icon, title, description}, index) => 
//           <Feature 
//                 key={index}
//                 icon={icon}
//                 title={title}
//                 description={description}
//             />)}  
//         </section>
//     );
// }

// sutrumpiname koda su data
// export function FeaturesMap(params) {
//        return (
//         <section className={style.featuresList}>
//           params.list yra masyvas
//           {params.list.map((item, index) => 
//           <Feature 
//                 key={index}
//                 data={item}
//             />)}  
//         </section>
//     );
// }

// dar kitoks uzrasymo budas:
// export function FeaturesMap(params) {
//    const x = (item, index) => <Feature key={index} data={item}/>)} 
//        return (
//         <section className={style.featuresList}>
//           {params.list.map(x)}
//         </section>
//     );
// }

//anonimine funkcija:
// export function FeaturesMap(params) {
//    const x =  function (item, index){
//        return <Feature key={index} data={item}/>
// } 
//        return (
//         <section className={style.featuresList}>
//           {params.list.map(x)}
//         </section>
//     );
// }

// dar vienas pvz:

// exsportavome is convertFeatureDataToFeatures failo
export function FeaturesMap(params) {
       return (
        <section className={style.featuresList}>
          {params.list.map(convertFeatureDataToComponent)}
        </section>
    );
}



