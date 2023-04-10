import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-800 h-20 flex flex-col items-center justify-center p-3 relative bottom-0 left-0 right-0">
        <div className="w-full mx-auto max-w-screen-xl  md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Lockey™</a>. Todos los derechos reservados.
        </span>
        <div className='flex items-center '>
            <img width={"50px"} className='h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" />
            <img width={"80px"} className='ml-3' src="https://img.icons8.com/color/512/nodejs.png" alt="Nodejs icon" />
            <img width={"70px"} className='ml-3' src="https://play-lh.googleusercontent.com/CxmsLct-ExxgB8p-qyV5897AtVUL9UqKS1IQJ8AF88AMzXSQ1RMIVwtvuQfnwyxE3bIh" alt="Websocket icon" />
            <img width={"70px"} className='ml-3' src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" alt="Firebase icon" />
        </div>
        <img width={"250px"} src="https://upload.wikimedia.org/wikipedia/commons/2/23/Logo_UTSJR_new.gif" alt="Universidad Tecnológica de San Juan del Río" />

        </div>
    </footer>
    
  )
}
