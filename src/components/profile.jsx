import {
  Box,
  ListItem,
  ListItemText,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
const Profile = (props) => {
  return (
    <Box sx={{ width: "500px" }}>
      <Box sx={{ margin: "1rem 2rem 0 2rem" }}>
        <ListItem>
          <Button onClick={props.toggleDrawer("right", false)}>
            <ArrowBackIcon />
          </Button>
          <ListItemText
            sx={{ marginLeft: "1rem" }}
            primary={
              <Typography style={{ fontWeight: "700" }}>My Profile</Typography>
            }
          />
        </ListItem>
        <ListItem
          sx={{ padding: "0 !important" }}
          secondaryAction={
            <Button variant="outlined" edge="end" aria-label="delete">
              <EditIcon />
              Edit
            </Button>
          }
        >
          <ListItemText
            primary={
              <Typography style={{ fontWeight: "700" }}>
                Gemechis Urgessa
              </Typography>
            }
            secondary="Membership since 2020"
          />
        </ListItem>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            margin: "1rem 0 0 1rem",
            marginLeft: "0 !important",
          }}
        >
          <ListItemText
            sx={{ marginLeft: "0 !important" }}
            primary={
              <Typography style={{ fontWeight: "700" }}>Birth Date</Typography>
            }
            secondary="1999"
          />
          <ListItemText
            primary={
              <Typography style={{ fontWeight: "700" }}>Gender</Typography>
            }
            secondary="Male"
          />
          <ListItemText
            primary={
              <Typography style={{ fontWeight: "700" }}>Organ Donor</Typography>
            }
            secondary="No"
          />
        </Box>
        <ListItemText
          sx={{ marginLeft: "0 !important" }}
          primary={
            <Typography style={{ fontWeight: "700" }}>
              Social Security Number
            </Typography>
          }
          secondary="111111"
        />
        <ListItemText
          sx={{ marginLeft: "0 !important" }}
          primary={
            <Typography style={{ fontWeight: "700" }}>Nationality</Typography>
          }
          secondary="Ethiopia"
        />
        <ListItemText
          sx={{ marginLeft: "0 !important" }}
          primary={
            <Typography style={{ fontWeight: "700" }}>TelePhone</Typography>
          }
          secondary="092323123"
        />
        <ListItemText
          sx={{ marginLeft: "0 !important", marginBottom: "1rem" }}
          primary={
            <Typography style={{ fontWeight: "700" }}>Post Address</Typography>
          }
          secondary="new york manmn"
        />
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            margin: "1rem 0 0 1rem",
            marginLeft: "0 !important",
          }}
        >
          <ListItemText
            sx={{ marginLeft: "0 !important" }}
            primary={
              <Typography style={{ fontWeight: "700" }}>
                Travel Insurance
              </Typography>
            }
            secondary="Travel"
          />
          <ListItemText
            primary={
              <Typography style={{ fontWeight: "700" }}>
                Policy Number
              </Typography>
            }
            secondary="jack pot"
          />
        </Box>
        <ListItemText
          sx={{ marginLeft: "0 !important", marginBottom: "1rem" }}
          primary={
            <Typography style={{ fontWeight: "700" }}>
              Emergency Phone
            </Typography>
          }
          secondary="911"
        />
        <Divider />
        <ListItemText
          sx={{
            marginLeft: "0 !important",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
          primary={
            <Typography style={{ fontWeight: "700" }}>
              Contact Persons in case of Emergency
            </Typography>
          }
          secondary={
            <Typography sx={{ display: "flex", flexDirection: "column" }}>
              <Typography>Name</Typography>
              <Typography>Phone</Typography>
            </Typography>
          }
        />
        <Divider />
        <ListItemText
          sx={{
            marginLeft: "0 !important",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
          primary={
            <Typography style={{ fontWeight: "700" }}>
              Other Information
            </Typography>
          }
          secondary={
            <Typography sx={{ display: "flex", flexDirection: "column" }}>
              <Typography>Allergies</Typography>
              <Typography>Medications</Typography>
            </Typography>
          }
        />
      </Box>
    </Box>
  );
};

export default Profile;
