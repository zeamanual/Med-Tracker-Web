import React, { useEffect, useState } from "react";
import {
  TextField,
  MenuItem,
  ListItem,
  List,
  ListItemText,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
const Languages = [
  { name: "English" },
  { name: "Spanish" },
  { name: "French" },
  { name: "German" },
  { name: "Italian" },
  { name: "Portuguese" },
  { name: "Russian" },
  { name: "Chinese" },
  { name: "Japanese" },
  { name: "Korean" },
  { name: "Arabic" },
  { name: "Hindi" },
  { name: "Urdu" },
  { name: "Turkish" },
  { name: "Dutch" },
];

const TranslateLang = (props) => {
  const [Lang, setLang] = useState("English");
  const [loading, setLoading] = useState(false);

  let temp;
  const handleLang = (e) => {
    setLoading(true);
    setLang(e.target.value);
    temp = setTimeout(() => setLoading(false), 1000);
  };
  useEffect(() => {
    return () => {
      clearTimeout(temp);
    };
  }, [temp]);
  return (
    <Box sx={{ width: "500px", marginTop: "5rem", margin: "5rem 5px 0 5px" }}>
      <TextField
        fullWidth
        id="outlined-select-lang"
        select
        value={Lang}
        onChange={handleLang}
      >
        {Languages.map((option) => (
          <MenuItem key={option.name} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {loading ? (
          <CircularProgress style={{ marginLeft: "50%", marginTop: "50%" }} />
        ) : (
          <ListItem>
            <ListItemText
              primary={
                <Typography style={{ fontWeight: "1000" }}>
                  {Math.floor(Math.random() * 100) + 10}
                </Typography>
              }
              secondary={"nm"}
            />
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default TranslateLang;
