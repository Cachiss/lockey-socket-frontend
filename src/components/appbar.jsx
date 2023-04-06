import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LockeyLogo from '../assets/lockey_logo.png'
import GithubIcon from '../assets/github_icon.png'

export const AppBar = ({onAboutClick = ()=>{}}) => {
  const [loading, setLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const logged = window.localStorage.getItem('logged')
    if (logged) {
      setIsLogged(true)
    }
    setLoading(false)
  }, [])

  if (loading) return <div className='bg-white border-gray-200 dark:bg-gray-900 w-screen fixed z-50'></div>
  return (

<nav className="bg-white border-gray-200 dark:bg-gray-900 w-screen fixed z-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src={LockeyLogo} className="h-5 ml-3" alt="Lockey Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-white" aria-current="page">Inicio</a>
        </li>
        <li className='flex cursor-pointer' onClick={()=>window.location.href="https://github.com/Cachiss/lockey_app"}>
          <p className='className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"'>Github</p>
          <img src={GithubIcon} alt="github icon" className='ml-1 w-6 h-auto' />

        </li>
        <li className='flex cursor-pointer' onClick={onAboutClick}>
          <p className='className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"'>Sobre nosotros</p>
          </li>

        <Link to={"/login"}>
        <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-md hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" style={{"display": isLogged ? "none" : null}}>Iniciar sesión</button>
        </Link>
      </ul>
    </div>
  </div>
</nav>
  )
}
