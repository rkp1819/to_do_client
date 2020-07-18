import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  console.log("Note component props: " + props);
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
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
  }));
  const classes = useStyles();

  return (
    <div className="note">
      <Grid item key={props.id}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5">
              {props.title}
            </Typography>
            <Typography>{props.content}</Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleClick} size="small" color="primary">
              <DeleteIcon />
            </Button>
          </CardActions>{" "}
        </Card>{" "}
      </Grid>
      <br/>
    </div>
  );
}

export default Note;
