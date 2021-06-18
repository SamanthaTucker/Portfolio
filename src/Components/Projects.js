import React, { Component } from 'react' 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function MediaCard() {
    const classes = useStyles();
  
    return (

    <div className='project-card-div' id='projects'>
      <Card className={classes.root} id='project-card'>
        <CardActionArea>

          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80"
            title="Vacation Planner"
          />
          <CardContent>

            <Typography gutterBottom variant="h5" component="h2" >
              Vacation Planner
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
            Full stack app created with JavaScript, EJS, Express, Node.js, HTML/CSS, MongoDB, and Sessions. Users have the ability to create an account and virtually plan their upcoming vacations with location, budget, days, and images. Users can explore links on webpage showing different routes, and have fun planning a vacation.
            </Typography>

          </CardContent>

        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary" href='https://github.com/SamanthaTucker/Vacation-Planner'>
            Link
          </Button>
        </CardActions>

      </Card>

      <Card className={classes.root} id='project-card'>
        <CardActionArea>

          <CardMedia
            className={classes.media}
            image="https://i.imgur.com/RfxrM55.jpeg"
            title="Restaurant Diary"
          />
          <CardContent>

            <Typography gutterBottom variant="h5" component="h2">
            Restaurant Diary
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
            Collaborative Full stack app Built with React.js, Node.js, Express, MongoDB, Bootstrap. Users can create a personalized account to post reviews of local restaurants based on meals, overall experience, price, and location. Using google maps API, Users are able to input the address of their restaurant of choice and see it appear on google maps on their webpage.a
            </Typography>

          </CardContent>

        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary" href='https://restaurant-diary.herokuapp.com/'>
            Link
          </Button>
        </CardActions>

      </Card>

      <Card className={classes.root} id='project-card'>
        <CardActionArea>

          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1519424187720-db6d0fc5a5d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="Denver Local"
          />
          <CardContent>

            <Typography gutterBottom variant="h5" component="h2">
              Denver Local
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
            An application based on local attractions and restaurant recommendations made by Users. End Users should be able to create their own account, add blog-like posts recommending Denver local restaurants, attractions, activities, etc. I am taking my very first coding project and updating it into a Denver Local App
            </Typography>

          </CardContent>

        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary" href="https://github.com/SamanthaTucker/Front-end-Denver-Local/tree/main/app-react">
            Link
          </Button>
        </CardActions>

      </Card>
    </div>
    );
  }