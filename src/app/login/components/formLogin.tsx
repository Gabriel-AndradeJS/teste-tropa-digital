'use client';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import style from './style.module.scss';

export function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <form className={style.form}>
      <div className={style.inputContainer}>
        <label className={style.label}>E-mail</label>
        <input
          className={style.input}
          type="email"
          placeholder="seunome@seuservidor.com"
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label className={style.label}>Senha</label>
        <div className={style.inputWrapper}>
          <input
            className={style.input}
            type={showPassword ? 'text' : 'password'}
            placeholder="Digite aqui"
            required
          />
          <button
            type="button"
            className={style.eyeButton}
            onClick={togglePassword}
            aria-label="Mostrar ou esconder senha"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <button className={style.button} type="submit">
        Enviar
      </button>
    </form>
  );
}
