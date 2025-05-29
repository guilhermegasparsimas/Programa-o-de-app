import { createContext, useState } from "react";
export const GlobalContext = createContext()
export const GlobalContextProvider = ({children}) => {

const [usuarioLogado, setUsuarioLogado] = useState('')
const [usuarios, setUsuarios] = useState([
    {
        id: 0,
        username: 'Gui',
        password: '1235' 
    },
])

let idadeUsuario = '55'

    return(
        <GlobalContext.Provider value={{
            usuarioLogado,
            setUsuarioLogado,
            idadeUsuario,
            usuarios,
            setUsuarios,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
