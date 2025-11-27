import React from 'react';
import AboutMe from './Aboutme';
import './App.css';
import { Container, Box } from '@mui/material';
import ProfessionalProfile from './profestional';

function App() {
  return (
    <Container maxWidth="lg">
      <Box display="flex" gap={10}>
        <Box flex={1}>
          <AboutMe />
        </Box>
        <Box flex={1}>
          <ProfessionalProfile />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
