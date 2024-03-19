import { ReactNode } from "react"
import '../container/styles.css'
export function Container({children} : {children: ReactNode}){
    return(
        <div className="container">
            {children}
        </div>
    )
}