import style from './style.module.scss';

export function FormLogin() {

    return (
        <form className={style.form}>
            <div className={style.inputContainer}>
                <label className={style.label}>E-mail</label>
                <input className={style.input} type="email" placeholder="seunome@seuservidor.com" required />
            </div>
            <div className={style.inputContainer}>
                <label className={style.label}>Senha</label>
                <input className={style.input} type="password" placeholder="Digite aqui" required />
            </div>
            <button className={style.button} type="submit">Enviar</button>
        </form>
    )
}