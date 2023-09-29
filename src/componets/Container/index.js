import style from "./Container.module.css"


export default function Container({tema, children}){



    return(
        <div className={tema} id={style.container}>
        
            {
                children
            }
        
        </div>
    )
}