import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import CameraIcon from '@mui/icons-material/PhotoCamera'

import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Routes, Route } from 'react-router';

import IndexRoute from './component/home/index'
import EditorRoute from './component/editor'
import VncRoute from './component/vnc'
import JupyterRoute from './component/jupyter'

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Album: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 8 }} maxWidth="md" style={{
        width: '75vw',
        height: '75vh'
      }}>

        <Routes>
          <Route path='/' element={<IndexRoute/>}/>
          <Route path='/code' element={<EditorRoute/>} />
          <Route path='/vnc' element={<VncRoute/>} />
          <Route path='/jupyter' element={<JupyterRoute/>}/>
        </Routes>
      </Container>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default Album