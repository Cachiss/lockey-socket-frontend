import { useState } from 'react';
import { Dialog, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const DialogEditUser = ({ open, onClose, user, setUser,onSubmit }) => {
    const [enabledPassword, setEnabledPassword] = useState(false);
    const colorInputPassword = enabledPassword ? '' : 'lightgray';
    const handleSubmit = (e) => {
        e.preventDefault();

        const userToSubmit = {
            id: user.id,
            name: user.name,
            email: user.email,
        };

        onSubmit(userToSubmit);
        onClose();
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <div className='flex justify-end'>
                <IconButton onClick={onClose}>
                    <CloseIcon className='mt-1 bg-red-700' sx={{ color: "white" }} />
                </IconButton>
            </div>
            <DialogTitle className='font-bold text-center' sx={{ padding: "0 !important" }}>
                Editar usuario
            </DialogTitle>
            <div className='bg-white shadow-2xl px-3'>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label className='text-gray-500 font-sans text-sm' htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" className="border-2 border-gray-300 p-2 
                                rounded-md" value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col mt-1">
                        <label className='text-gray-500 font-sans text-sm' htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"
                            className="border-2 border-gray-300 p-2 rounded-md"
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            value={user.email} />
                    </div>
                    <div className="flex flex-col mt-1">
                        <label className='text-gray-500 font-sans text-sm' htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" 
                        className="border-2 border-gray-300 p-2 rounded-md" 
                        style={{"background": colorInputPassword}}  disabled={!enabledPassword} 
                        />
                    </div>
                    <div className="flex justify-between mt-1">
                        <label className='text-gray-500 font-sans text-sm' htmlFor="password-checker">Cambiar contraseña</label>
                        <input type="checkbox" name="password" id="password-checker" className="border-2 border-gray-300 p-2 rounded-md" checked={enabledPassword}
                            onChange={(e) => setEnabledPassword(e.target.checked)} />
                    </div>
                    <div className="flex justify-end my-3">
                        <button className="bg-blue-700 p-1 text-white w-30 lg:w-20">Guardar</button>
                    </div>
                </form>
            </div>
        </Dialog>
    )
}

export default DialogEditUser