import React from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material';

import { BsThreeDots } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import deletePostAction from '../../config/redux/action/postsAction/deletePostAction';
import Swal from 'sweetalert2';

const MenuEdit = ({ id, img }) => {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure you want to delete this post?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deletePostAction(id, img))
            }
        });
    }

    return (
        <>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <BsThreeDots />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <div>Edit</div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <div onClick={handleDelete}>Delete</div>
                </MenuItem>
            </Menu>
        </>
    )
}

export default MenuEdit