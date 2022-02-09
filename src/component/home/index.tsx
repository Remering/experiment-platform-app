import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'


import PythonCode from '../../assets/python_code.jpg'
import VNCDesktop from '../../assets/vnc3.png'
import Jupyter from '../../assets/jupyter.png'
import { useNavigate } from 'react-router-dom'

const cards = [
  {
    img: PythonCode,
    content: 'Coding and running python uses online editor.',
    router: '/code'
  },
  {
    img: VNCDesktop,
    content: 'Coding and running python uses vnc remote desktop.',
    router: '/vnc'
  },
  {
    img: Jupyter,
    content: 'Coding and running python uses online jupyter editor.',
    router: '/jupyter'
  }
]

const IndexRoute: React.FC = () => {
  const navigate = useNavigate()
  return (
      <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Album layout
          </Typography>
        </Container>
      </Box>
        {/* End hero unit */}
      <Grid container spacing={4}>
        {cards.map(({img, content, router}) => (
          <Grid item key={img} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea onClick={() => navigate(router)}>
                <CardMedia
                  component="img"
                  image={img}
                  height='200'
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography>{content}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default IndexRoute