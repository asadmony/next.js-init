import style from '../styles/Layout.module.css'
import { Header } from './Header'

export const Layout = ({children}) => {
    return (
        <div className={style.containe}>
            <main className={style.main}>
                <Header></Header>
                {children}
            </main>
        </div>
    )
}
