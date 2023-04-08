import { useState, useEffect } from 'react';
import io from 'socket.io-client';


//MUI COMPONENTS 
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Popover,
  CircularProgress, 
  Dialog, 
  DialogTitle
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


//COMPONENTS
import { AppBar } from '../components/appbar';

//STYLES & ASSETS
import '../App.css';
import ReactIcon from '../assets/react.svg';
import PopoverComponent from '../components/popover';
import DialogEditUser from '../components/dialogs/dialog_edit_user';
import DialogDeleteUser from '../components/dialogs/delete_user';
import DialogCreateUser from '../components/dialogs/create_user';

//SOCKET
const socket = io(import.meta.env.VITE_SOCKET_URL);

function FirestoreUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dialogAddUser, setDialogAddUser] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [currentInfoUser, setCurrentInfoUser] = useState({});


  const toggleDialogAddUser = () => {
    setDialogAddUser(!dialogAddUser);
  }

  const handleClickEditUser = ()=> {
    //setCurrentInfoUser(user);
    setEditDialog(true);
  }

  const handleClickDeleteUser = (user) => {
    setDeleteDialog(true);
  };

  const onCloseEditDialog = () => {
    setEditDialog(false);
    setCurrentInfoUser({});
  }

  const onDeleteDialogUser = () => {
    console.log("currentInfoUser:", currentInfoUser);
    socket.emit('delete_user', currentInfoUser.id);
    setDeleteDialog(false);
  };

  const handleAddUserDialog = (user) => {
    socket.emit("create_user", user)
    setDialogAddUser(false);
  }

  useEffect(() => {
    //CHECK IF USER IS LOGGED
    const isLogged = window.localStorage.getItem('logged');
    if (!isLogged) window.location.href = '/login';
    console.log("RE-RENDER");
    socket.connect(() => {
      console.log('connected');
    });
    socket.on('connect', () => {
      console.log('connected');
    })
    socket.on('get_users', (users) => {
      setUsers(users);
      setLoading(false);
      console.log("usuarios de firestore", users);
    });
    socket.on('get_users_auth', (users) => console.log("users", users));

    socket.on('test', (data) => console.log(data));

    return () => {
      socket.disconnect();
    }
  }, [])

  if (loading) return (
    <div id='container' className='h-screen flex items-center justify-center'>
      <CircularProgress />
    </div>
  );

  return (
    <div id="container" className='h-[90vh]'>
      <div className=' flex flex-col-reverse  justify-items-center lg:flex-row lg:items-center'>
        <h1 className='text-4xl'>Lista de usuarios con websockets</h1>
        <div className='flex lg:justify-start'>
          <img src={ReactIcon} alt="React" className="ml-6 w-20 h-20" />
          <img src="https://socket.io/images/logo.svg" alt="Socket.io" className="ml-3 w-20 h-20" />

        </div>
      </div>
      <div className='flex justify-end'>
        <button className='bg-blue-700 text-white w-40 h-10 rounded-md' onClick={toggleDialogAddUser}>Agregar usuario</button>
      </div>

      {/* Dialog components */}

      <DialogCreateUser dialogAddUser={dialogAddUser} toggleDialogAddUser={toggleDialogAddUser} onSubmit={(data)=>handleAddUserDialog(data)} />
      <DialogEditUser open={editDialog} onClose={onCloseEditDialog} user={currentInfoUser} setUser={setCurrentInfoUser} onSubmit={(data)=>socket.emit("edit_user", data )}/>
      <DialogDeleteUser open={deleteDialog} setOpen={setDeleteDialog} onDelete={onDeleteDialogUser} />

      <TableContainer component={Paper} className='mt-5'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: 'black' }}>
            <TableRow>
              <TableCell>
                <Typography sx={{ color: 'white' }}>#</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ color: 'white' }}>Nombre</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ color: 'white' }}>Email</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ color: 'white' }}>Contraseña</Typography>
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell align="center">
                  <PopoverComponent id={user.id} clickEdit={handleClickEditUser} deleteUser={handleClickDeleteUser} setUser={()=> setCurrentInfoUser(user) } />
                </TableCell>
              </TableRow>

            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default FirestoreUsers
