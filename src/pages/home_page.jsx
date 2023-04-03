import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Divider } from '@mui/material'
import SecurityAsset from '../assets/security_asset.svg'
import Asset2 from '../assets/asset_2.svg';
import { Footer } from '../components/footer';
import Swiper from '../components/swiper';
import { AppBar } from '../components/appbar';

export const HomePage = () => {
  const aboutRef = useRef(null)
  const onAboutClick = () => {
     window.scrollTo({top: aboutRef.current.offsetTop - 70, behavior: 'smooth'})
}
  return (
    <>
      <AppBar onAboutClick={onAboutClick} />
      <div className="bg-gray-100 p-5 sm:p-20 lg:p-30">
        <section className='flex '>
          <div className='w-1/2 flex flex-col justify-center align-center'>
            <p className='text-xl'>Automatiza tu casa con cerraduras y luces <span className='text-4xl block'>Inteligentes</span></p>
            <button className='mt-4 bg-blue-700 text-white w-1/2 h-10 rounded-md' onClick={()=>window.location.href = '/firestore-users'}>
              <p className='lg: text-2xl'>¡Inicia!</p>
            </button>
          </div>
          <div className='w-1/2 flex justify-items-center'>
            <img src={SecurityAsset} alt='Security Asset' />
          </div>
        </section>
        <Divider sx={{marginTop:"2rem"}} />
      
        <section className='mt-3 mb-10'>
          <h3 className='text-4xl text-center mb-3'>¿Qué es Lockey?</h3>
          <div className='flex flex-col justify-center items-center lg:flex-row'>
            <img src={Asset2} alt='Asset 2' className='mt-3 w-2/3 lg:w-1/3 h-auto' />
            <p className='mt-3 text-gray-700 text-justify lg:w-2/3 lg:text-2xl'>
              Lockey es un proyecto que se enfoca en el control automatizado del
              hogar mediante una aplicación móvil. Este sistema de automatización
              del hogar se centra en el control de acceso y el control de luces en
              el hogar. El sistema utiliza tecnología de huella dactilar para controlar
              el acceso a la casa y las luces se controlan a través de la aplicación
              móvil.<br/><br/>
              El sistema de control de acceso por huella dactilar permite que los
              propietarios de la casa otorguen acceso a las personas que deseen
              permitir en su hogar de una manera rápida y segura. El sistema
              registra las huellas dactilares de los usuarios autorizados, lo que
              significa que solo las personas con una huella dactilar registrada
              pueden ingresar a la casa. Esto proporciona una capa adicional de
              seguridad para el hogar, lo que lo hace más difícil de violar en
              comparación con los sistemas de control de acceso tradicionales que usan
              llaves o contraseñas.
            </p>
          </div>
        </section>

        <Divider sx={{marginY:"2rem"}} />
        <section ref={aboutRef}>
          <h3 className='text-4xl text-center mb-4'>Conoce al equipo Lockey</h3>
          <Swiper />
        </section>
      </div>
    </>
  )
}
