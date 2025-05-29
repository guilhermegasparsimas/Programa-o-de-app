import { createContext, useState } from "react";
export const GlobalContext = createContext()
export const GlobalContextProvider = ({children}) => {

const [usuarioLogado, setUsuarioLogado] = useState('')
const [usuarios, setUsuarios] = useState([
    {
        id: 0,
        username: 'Gui',
        password: '1235',
        idade: '27' 
    },
    {
        id: 1,
        username: 'Eduarda',
        password:'1923',
        idade: '24'
    },
    {
        id: 2,
        username: 'Mariana',
        password: '1001',
        idade: '32'
    },
])



    return(
        <GlobalContext.Provider value={{
            usuarioLogado,
            setUsuarioLogado,
            usuarios,
            setUsuarios,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
