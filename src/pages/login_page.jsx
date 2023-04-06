import { useState, useEffect } from 'react';
import {Navigate, useNavigate} from "react-router-dom"
import LockeyLogo from '../assets/lockey_logo.png'
import { CircularProgress } from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      console.log('Ingrese email');
      setError({...error, email: 'Ingrese email'});
      return;
    }
    if (!password.trim()) {
      console.log('Ingrese password');
      setError({...error, password: 'Ingrese password'});
      return;
    }
    if (password.length < 6) {
      setError({...error, password: 'La contraseña debe tener al menos 6 caracteres'});
      return;
    }
    if(email === "root@gmail.com" && password === "root123"){
      setError(null);
      console.log('Usuario logueado');
      window.localStorage.setItem('logged', true);
      window.location.href = '/firestore-users';

    }else{
      setError({...error, password: 'Usuario o contraseña incorrectos'});
    }
  }

  useEffect(() => {
    const isLogged = window.localStorage.getItem('logged');
    if (isLogged) {
      navigate('/firestore-users');
    }
    setLoading(false);
  }, [])
  
  if (loading) return (
    <div className='h-screen flex justify-center items-center'>
      <CircularProgress />
    </div>
  );

  return (
    <div className='container-lg flex flex-col items-center justify-center'>
      <div className="login flex flex-col justify-center items-center">
        <img src={LockeyLogo} alt="Icono de Lockey" className='mb-10 w-1/2 lg:w-1/6' />
        
        <div className='bg-white shadow-2xl flex flex-col justify-center items-center w-10/12  lg:w-1/3 h-90 rounded-md'>
        <h1 className='text-3xl my-10'>Inicia sesión</h1>

          <form 
            onSubmit={handleLogin}
            className='flex flex-col items-center justify-center w-full'>
            <div className='flex flex-col w-4/5'>
              <label className='text-gray-500 font-sans text-sm ' htmlFor='email'>Email</label>
              <input 
                onChange={(e) => {setEmail(e.target.value)}}
                className='rounded-md p-1 border-2 border-gray-100 h-12'
                type='email' name='email' id='email'
                placeholder='Escribe tu correo electrónico' />
              
              <p className='text-red-500 text-sm'>{error?.email}</p>

            </div>
            <div className='flex flex-col mt-5 w-4/5'>
              <label className='text-gray-500 font-sans text-sm ' htmlFor='password'>Contraseña</label>
              <input 
                onChange={(e) => {setPassword(e.target.value)}}
                className='rounded-md p-1 border-2 border-gray-100 h-12'
                type='password' name='password' id='password'
                placeholder='Escribe tu contraseña' />
                <p className='text-red-500 text-sm'>{error?.password}</p>
            </div>
            <button className='bg-blue-700 text-white w-40 h-10 rounded-md my-5'>Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage