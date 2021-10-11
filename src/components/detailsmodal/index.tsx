import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { GridRowData } from '@mui/x-data-grid';
import { Launch } from '../../store/application/types';
import './index.css'

const DetailsModal = (rowData : GridRowData) => {
  const launch : Launch = rowData as Launch;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return ( 
    <div>
        <Button onClick={handleOpen}>View</Button>
      <Modal style={{display:'flex',
      alignItems:'center',
      justifyContent:'center',  
      height: '450px',
      width:'450px',
      top:'25%',
      left:'35%',
      borderRadius:'20px',
      backgroundColor: '#000000'}}
        open={open}
        onClose={handleClose}
      >
        <Box >
        <img  src={launch.links.mission_patch_small} alt={launch.rocket.rocket_name} className='rocket-img' ></img>
      <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <div className="rocket-info">
          <div>ID   - {launch.rocket.rocket_id}</div>
          <div>Name - {launch.rocket.rocket_name}</div> 
          <div>Type - {launch.rocket.rocket_type}</div> 
        </div>
        </Box>
      </Modal>
    </div>
  );
}
export default DetailsModal;