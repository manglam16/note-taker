import { Button, Card, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen/MainScreen";
// import notes from "../../notes";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const { data } = await axios.get("http://localhost:5000/api/notes");
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Hello Manglam" children>
      <Link to="createnote">
        <Button sx={{ margin: "10px" }} variant="contained" size="large">
          Create New Note
        </Button>
      </Link>

      {notes.map((note) => (
        <Card variant="outlined" sx={{ margin: "10px" }} key={note._id}>
          <CardContent>
            <Typography variant="button" marginRight="10vh">
              {note.title}
            </Typography>
          </CardContent>
          <CardContent>
            <Button
              variant="contained"
              color="success"
              sx={{ marginBottom: "1vh" }}
            >
              {note.category}
            </Button>
            <Typography variant="body1">{note.content}</Typography>
          </CardContent>
          <CardContent>
            <Stack direction="row" spacing={2}>
              <Button color="primary" variant="contained">
                Edit
              </Button>
              <Button color="error" variant="contained">
                Delete
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
