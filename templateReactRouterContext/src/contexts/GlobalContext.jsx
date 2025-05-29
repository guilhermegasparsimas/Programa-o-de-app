import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    // aqui cria as informações (variáveis, states funções...) que serão servidas para todos os componentes
const [usuarioLogado, setUsuarioLogado] = useState('')
const [usuarios, setUsuarios] = useState([
    {
        id: 0,
        username: 'Gui',
        password: '1235',
        email: 'guisimas0201@gmail.com',
    },
    {
        id: 1,
        username: 'Bill',
        password: '1234',
        email: 'Bill@Gates.com',
    }, 
])
let idadeUsuario = '55'
let valorMisterioso = 'Error 404: "app.jsx" is not defined'

    return(
        <GlobalContext.Provider value={{
            //aqui joga as informações pra nuvem
            usuarioLogado,
            setUsuarioLogado,
            idadeUsuario,
            valorMisterioso,
            usuarios,
            setUsuarios,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
