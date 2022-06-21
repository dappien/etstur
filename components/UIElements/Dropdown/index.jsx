import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function PositionedMenu({buttonName,dataSet,city,setCity}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (data) => {
    setAnchorEl(null);
    setCity(data.city);
  };
  const ITEM_HEIGHT = 30;
  return (
    <div>
      <h5
        style={{margin:0,fontSize:"16px",fontWeight:400,padding:"5px 0",color:"rgb(141, 141, 141)"}}
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {buttonName}
      </h5>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      > {dataSet.map((data)=>(
        <MenuItem onClick={()=>handleClose(data)}>{data.city}</MenuItem>
      ))}
      </Menu>
    </div>
  );
}
