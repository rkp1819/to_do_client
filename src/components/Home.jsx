import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CreateArea from "./CreateArea";
import Note from "./Note";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {" "}
      {"Copyright © "}{" "}
      <Link color="inherit" href="/home">
        To - Do{" "}
      </Link>{" "}
      {new Date().getFullYear()} {"."}{" "}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Home() {
  const classes = useStyles();
  const [notes, setNotes] = React.useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AccountCircleIcon className={classes.icon} />{" "}
          <Typography variant="h6" color="inherit" noWrap>
            User Name{" "}
          </Typography>{" "}
        </Toolbar>{" "}
      </AppBar>{" "}
      <main>
        {" "}
        {/* Hero unit */}{" "}
        <div className={classes.heroContent}>
          <Container maxWidth={false}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Task Board{" "}
            </Typography>{" "}
            <Typography align="center">
              <CreateArea onAdd={addNote} />
            </Typography>{" "}
          </Container>{" "}
        </div>{" "}
        <Container className={classes.cardGrid} maxWidth="md">
          {" "}
          {/* End hero unit */}{" "}
          <Grid container alignItems="stretch" xs="auto"  wrap="wrap" direction="row" justify="space-evenly">
            <Note
              key="-1"
              id="-2"
              title="default title"
              content="default content"
              priority="low"
              onDelete={deleteNote}
            />
            {notes.map((noteItem, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  
                  onDelete={deleteNote}
                />
              );
            })}{" "}
          </Grid>{" "}
        </Container>{" "}
      </main>{" "}
      {/* Footer */}{" "}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Contact us{" "}
        </Typography>{" "}
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          <Link color="inherit" href="https://github.com/rkp1819">
            give us a feedback{" "}
          </Link>{" "}
        </Typography>{" "}
        <Copyright />
      </footer>{" "}
      {/* End footer */}{" "}
    </React.Fragment>
  );
}
