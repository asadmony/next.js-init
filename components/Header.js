import style from '../styles/Header.module.css'
import Link from 'next/link'

export const Header = () => {
    return (
        <div className={style.header}>
            <Link href="/"><a className={style.link}>Home</a></Link>
            <Link href="/content"><a className={style.link}>Contents</a></Link>
            <Link href="/about"><a className={style.link}>About</a></Link>
        </div>
    )
}
