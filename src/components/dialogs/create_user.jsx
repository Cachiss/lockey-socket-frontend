import { useState } from 'react';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const DialogCreateUser = ({ dialogAddUser, toggleDialogAddUser, onSubmit }) => {
	const [user, setUser] = useState({});
	const [error, setError] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		if(user.password.length < 6) {
			setError("La contraseña debe tener al menos 6 caracteres");
			return;
		}
		onSubmit(user);
	}
	
	return (
		<Dialog open={dialogAddUser} onClose={toggleDialogAddUser}>
			<div className='flex justify-end'>
				<IconButton onClick={toggleDialogAddUser}>
					<CloseIcon className='mt-1 bg-red-700' sx={{ color: "white" }} />
				</IconButton>
			</div>
			<DialogTitle>Agregar un nuevo usuario</DialogTitle>
			<form onSubmit={handleSubmit} className='p-3'>
				<div className="flex flex-col">
					<label className='text-gray-500 font-sans text-sm' htmlFor="name">Nombre</label>
					<input type="text" name="name" id="name" className="border-2 border-gray-300 p-2
                    rounded-md" 
								onChange={(e) => setUser({ ...user, name: e.target.value })}
					/>
				</div>
				<div className="flex flex-col mt-1">
					<label className='text-gray-500 font-sans text-sm' htmlFor="email">Email</label>
					<input type="email" name="email" id="email"
						className="border-2 border-gray-300 p-2 rounded-md"
						onChange={(e) => setUser({ ...user, email: e.target.value })}	 
					/>
				</div>
				<div className="flex flex-col mt-1">
					<label className='text-gray-500 font-sans text-sm' htmlFor="password">Contraseña</label>
					<input type="password" name="password" id="password"
						className="border-2 border-gray-300 p-2 rounded-md" 
						onChange={(e) => setUser({ ...user, password: e.target.value })}
					/>
					<p className='text-red-500 text-xs'>{error}</p>
				</div>
				<button className='bg-blue-500 text-white p-2 rounded-md mt-2' type='submit'>Agregar</button>
			</form>
		</Dialog>)
}

export default DialogCreateUser