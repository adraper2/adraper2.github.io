import React, { Component } from "react";
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Blog extends Component {
  state = {};

  render() {
    const{
      blogImage,
      blogTitle,
      blogDesc,
      blogLink
    } = this.props.blog;

    return (
      <div>
        <Card>
        <CardActionArea>
        <img
          src={require(`../images/${blogImage}`)}
          className="hobby-image rounded border"
          alt="blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {blogTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {blogDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={"/" + blogLink}>
          Read More
        </Button>
      </CardActions>
    </Card>
      </div>
    );
  }
}

export default Blog;