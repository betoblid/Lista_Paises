import { useContext } from "react";
import { Mycontext } from "./CreateContext";


//essa function fica na responsabilidade de usar o context
export function UserContextStore() {

    return useContext(Mycontext)
}
