import React, { Component } from "react";
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HobbyPage from "./hobby-page";

class Hobby extends Component {
  state = {};

  render() {
    const{
      hobbyImage,
      hobbyTitle,
      hobbyDesc,
      hobbyLink
    } = this.props.hobby;

    return (
      <div>
        <Card className = "hobby-box">
        <CardActionArea>
        <img
          src={require(`../images/${hobbyImage}`)}
          className="hobby-image rounded border"
          alt="project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {hobbyTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {hobbyDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={"/" + hobbyLink}>
          See More
        </Button>
      </CardActions>
    </Card>
      </div>
    );
  }
}

export default Hobby;
