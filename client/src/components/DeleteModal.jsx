/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: "0.8rem",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function DeleteModal({ modalOpen, setModalOpen, deleteMember }) {
    const handleClose = () => setModalOpen(false);

    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description">
                        Are you sure you want to delete this member?
                    </Typography>
                    <Button variant="contained" sx={{mt:6, float:'right', bgcolor:'#EF4444', borderRadius:'0.5rem'}} onClick={()=>console.log(deleteMember)}>
                        Delete
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
