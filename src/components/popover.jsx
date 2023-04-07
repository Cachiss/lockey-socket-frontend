import { useState } from "react";
import { Popover, IconButton, Button } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PopoverComponent = ({id, clickEdit, deleteUser}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const clickDelete = () => {
        deleteUser(id);
        setAnchorEl(null);
    }

    return (
        <>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}
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
                    <button className="bg-red-700 p-1 text-white w-30 lg:w-20" onClick={clickDelete}>Eliminar</button>
                </div>
            </Popover>

        </>
    )
}

export default PopoverComponent