import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled, alpha } from "@mui/material/styles";
import { Menu, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteFileById } from "../state/slices/delete-document";
import { useSnackbar } from "notistack";
import { fetchFilesSuccess } from "../state/slices/list-documents";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import EditDocumentPage from "../pages/edit-document-page";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const DocumentLists = (props) => {
  const [file, setFile] = useState([]);
  const [title, setTitle] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const isDeleted = useSelector((state) => state.deleteDocument.isDeleted);
  const deleteError = useSelector((state) => state.deleteDocument.errorMessage);
  const { enqueueSnackbar } = useSnackbar();
  const files = useSelector((state) => state.files);
  const [drawerState, setDrawerState] = useState(false);
  const [item, setItem] = useState({});

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const toggleDrawer = (anchor, open, eachFile) => (event) => {
    handleClose();
    if (open) {
      setItem(eachFile);
    }
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState(open);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEdit = (item) => {
    toggleDrawer("right", true);
  };
  const handleDelete = (Id) => {
    dispatch(deleteFileById(Id));
    if (isDeleted) {
      const newFile = files.map((file) => file.id !== Id);
      dispatch(fetchFilesSuccess(newFile));
      const variant = "success";
      enqueueSnackbar("Document Successfully Deleted!", { variant });
    } else {
      const variant = "error";
      enqueueSnackbar(`${deleteError} Error! Please try again`, { variant });
    }
  };

  useEffect(() => {
    setFile(props.data);
    setTitle(props.title);
  }, [props.data, props.title]);

  return (
    <>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        subheader={<ListSubheader>{title}</ListSubheader>}
      >
        {file
          ? file.map((eachFile) => {
              return (
                <ListItem key={eachFile.documentId}>
                  <ListItemIcon>
                    <FileCopyIcon />
                  </ListItemIcon>
                  <ListItemText id={eachFile.title} primary={eachFile.title} />
                  <Button
                    sx={{ float: "right" }}
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    disableElevation
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </Button>
                  <StyledMenu
                    id="customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={toggleDrawer("right", true, eachFile)}>
                      <EditIcon />
                      Edit
                    </MenuItem>
                    <MenuItem onClick={() => handleDelete(eachFile.documentId)}>
                      <DeleteForeverIcon />
                      Delete
                    </MenuItem>
                  </StyledMenu>
                </ListItem>
              );
            })
          : null}
        <SwipeableDrawer
          anchor={"right"}
          open={drawerState}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {<EditDocumentPage item={item} />}
        </SwipeableDrawer>
      </List>
    </>
  );
};

export default DocumentLists;
