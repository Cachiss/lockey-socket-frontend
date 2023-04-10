import {useState} from 'react'
import { Dialog, DialogTitle} from '@mui/material'
import emoji from 'node-emoji';

const DialogDeleteUser = ({open, setOpen,onDelete}) => {
    const [deleted, setDeleted] = useState(false);

    const handleDelete = () => {
        onDelete();
        setDeleted(true);
    };

    if(deleted){
        return(
            <Dialog open={open}>
                <DialogTitle>Usuario eliminado</DialogTitle>
                <button onClick={()=>setOpen(false)}>Cerrar</button>
            </Dialog>
        );
    }
  return (
    <Dialog open={open}> 
        <div className='flex flex-col p-3'>
            <p className='text-3xl text-center'>¿Estas seguro de eliminar este usuario?</p>
            <div className='flex justify-evenly mt-4'>
                <button className='bg-red-700 p-1 text-white w-30 lg:w-40 h-10' onClick={handleDelete}>Eliminar {emoji.get('imp')}</button>
                <button className='bg-blue-700 p-1 text-white w-30 lg:w-40 h-10' onClick={()=>setOpen(false)}>Cancelar</button>
            </div>
        </div>
    </Dialog>
  )
}

export default DialogDeleteUser