import React from 'react'

const University = (props) => {
  console.log(props)
  return (
    <Grid item key={card.id} xs={12} sm={6} md={4}>
      {/* <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}> */}
      {/* <CardMedia component="img" alt="green iguana" height="140" image= {Test[Math.floor(Math.random()*Test.length)]} /> */}
      <Avatar alt="Remy Sharp" sx={{ width: 200, height: 200 }} style={{ margin: "0 auto" }} src={Test[Math.floor(Math.random() * Test.length)]}></Avatar>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
          {card.name}
        </Typography>
        <Typography style={{ textAlign: "center" }}>
          Reviews: {reviewcounts[card.name]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ margin: "0 auto" }}>
          <a href={`/universities/${card.id}`} style={{ textDecoration: 'none' }}> ahref </a>
          <Link to={`/universities/${card.id}`} style={{ textDecoration: 'none' }}> View </Link>
        </Button>

        {/* <Link href="/universities/1" underline="none">View</Link> */}
        {/* <Button size="small">Edit</Button> */}
      </CardActions>
      {/* </Card> */}
    </Grid>
    )
}
export default University
