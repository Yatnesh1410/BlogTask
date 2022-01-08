import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Body({ data,searchTerm }) {
  return (
    <Container>
      <Grid container rowSpacing={3} columnSpacing={3} padding={3}>
        {data?.filter((post) => {
            if(searchTerm === ""){return post}
            else if(post.body.toLowerCase().includes(searchTerm.toLowerCase())){return post}
            else if(post.title.toLowerCase().includes(searchTerm.toLowerCase())){return post}
        }).map((post) => {
          return (
            <Grid item xs={12} md={6} key={post.id}>
                <Card sx={{ minHeight: 250 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      sx={{ mb: 1.5 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Post Number: #{post.id}
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                      {post.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Posted By: User Number #{post.userId}
                    </Typography>
                    <Typography variant="body2">{post.body}</Typography>
                  </CardContent>
                </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Body;
