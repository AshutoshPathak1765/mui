import React from 'react'
import {
    ExpandMore,
    Favorite,
    FavoriteBorder,
    MoreVert,
    Share,
  } from "@mui/icons-material";
  import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
  } from "@mui/material";
  import { pink, red } from "@mui/material/colors";

function Post(props) {
  return (
    <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={props.title}
          subheader={props.subheader}
        />
        <CardMedia
          component="img"
          height="200"
          image="https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Post