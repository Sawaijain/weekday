import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const JobDescriptionModal = ({ open, handleClose, jobDescription }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="job-description-modal-title"
            aria-describedby="job-description-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                bgcolor: 'background.paper',
                // border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                maxHeight: '80vh',
                overflowY: 'auto'
            }}>
                <Typography id="job-description-modal-title" variant="h6" component="h2" gutterBottom>
                    Job Description
                </Typography>
                <Typography id="job-description-modal-description" variant="body1">
                    {jobDescription}
                </Typography>
                {/* <Button onClick={handleClose}>Close</Button> */}
            </Box>
        </Modal>
    );
};

export default JobDescriptionModal;
