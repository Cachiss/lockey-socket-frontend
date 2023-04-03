import { useState,useEffect } from 'react';
import io from 'socket.io-client';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import '../App.css';
import ReactIcon from '../assets/react.svg';
import { AppBar } from '../components/appbar';
import { CircularProgress } from '@mui/material';

const socket = io("http://localhost:3006");

function FirestoreUsers() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    socket.connect(() => {
      console.log('connected');
    });
    socket.on('connect',()=>{
      console.log('connected');
    })
    socket.on('get_users', (users) => {
      setUsers(users);
      setLoading(false);
    });
    socket.on('get_users_auth', (users) => console.log("users",users));
  }, [socket])

  if(loading) return (
    <div id='container' className='h-screen flex items-center justify-center'>
      <CircularProgress />
    </div>
  );
  return (
    <div id="container" className='h-[90vh]'>
      <div className='flex items-center justify-items-center'>
        <h1 className='text-4xl'>Lista de usuarios con websockets</h1>
        <img src={ReactIcon} alt="React" className="ml-6 w-20 h-20" />
        <img src="https://socket.io/images/logo.svg" alt="Socket.io" className="ml-3 w-20 h-20" />
      </div>
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
              </TableRow>

            ))}
          </TableBody>
        </Table>
      </TableContainer>
          
    </div>
  )
}

export default FirestoreUsers
