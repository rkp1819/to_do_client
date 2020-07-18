import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [zoomIn, setZoomIn] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setZoomIn(false);
    setNote({
      title: "",
      content: "",
    });
    
    event.preventDefault();
  }

  return (
    <div>
      <FormControl>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Grid
            container
            spacing={3}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              {zoomIn && (
                <Typography>
                  <TextField
                    autoComplete="off"
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    label="Title"
                    variant="outlined"
                    color="primary"
                  />
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography>
                <TextField
                  autoComplete="off"
                  multiline={true}
                  variant="outlined"
                  name="content"
                  onChange={handleChange}
                  value={note.content}
                  label="Take a note..."
                  rows={zoomIn ? "3" : "1"}
                  color="primary"
                  onClick={(event) => {
                    setZoomIn(true);
                  }}
                />
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} alignContent="flex-end">
            <Typography left>
              <Zoom in={zoomIn}>
                <Fab onClick={submitNote}>
                  <AddIcon />
                </Fab>
              </Zoom>
            </Typography>
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
}

export default CreateArea;
