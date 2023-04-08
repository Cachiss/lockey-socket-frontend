import { useState } from "react";
import { Popover, IconButton, Button } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PopoverComponent = ({id, clickEdit, deleteUser, setUser}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpenOptions = (e) => {
        setAnchorEl(e.currentTarget);
        setUser()
    }
    return (
        <>
            <IconButton onClick={handleOpenOptions}
                aria-describedby={id}
            >
                <MoreVertIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div className="flex flex-col">
                    <button className="bg-blue-700 p-1 text-white w-30 lg:w-20" onClick={clickEdit}>Editar</button>
                    <button className="bg-red-700 p-1 text-white w-30 lg:w-20" onClick={deleteUser}>Eliminar</button>
                </div>
            </Popover>

        </>
    )
}

export default PopoverComponent