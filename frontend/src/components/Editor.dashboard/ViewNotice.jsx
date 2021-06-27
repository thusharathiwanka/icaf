import React, { useState} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Notice from "./Notice";

const ViewNotice = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [Value, SetValue] = useState(2);
   
    const handleChange = (event, newValue) => {
      SetValue(newValue);
    };
  
    return (<div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <MoreVertIcon color="action" />
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Notice Topic"}</DialogTitle>
            <DialogContent>
            <nav >
                <div className="navB">
                    <Paper square className="paper">
                        <Tabs value={Value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
                            <Tab label="Notice"/>
                            <Tab label="Update Notice" />
                        </Tabs>
                            </Paper>
                            
       
                    </div>    
        </nav>
            <DialogContentText id="alert-dialog-description">
         
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              close
            </Button>
           
          </DialogActions>
        </Dialog>
      </div> );
}
 
export default ViewNotice;