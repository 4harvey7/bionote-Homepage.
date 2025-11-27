import { Avatar,Typography, Box, Paper, Chip } from "@mui/material";
import profilePic from "./assets/profilepic.jpg";

function AboutMe() {
  const skills = ["React", "JavaScript", "Python", "SQL", "CSS", "HTML"];
  const interests = ["Traveling", "Reading", "Motorcycles", "Gaming"];

  return (
    <>
      {/* Name Section */}
      <Box textAlign="center" mt={4} mb={4}>
        <Avatar
        alt="Rodz Harvey"
        src={profilePic}
        sx={{ width: 120, height: 120, margin: "0 auto" }}
        />
        <Typography variant="h3">Rodz Harvey D. Licayan</Typography>
        <Typography variant="subtitle1">
          IT Manager | Programmer | Creative Thinker
        </Typography>
      </Box>

      {/* About Section */}
      <Paper>
        <Box p={2}>
          <Typography variant="h5">About Me</Typography>
          <Typography>
            Hi! I am Rodz Harvey, a creative programmer and IT manager from Cebu,
            Philippines. I enjoy building innovative web applications and learning
            new technologies to solve real-world problems.
          </Typography>
        </Box>
      </Paper>

      {/* Skills Section */}
      <Box mt={3} mb={3}>
        <Typography variant="h5">Skills</Typography>
        <Box display="flex" gap={1} flexWrap="wrap">
          {skills.map((skill, index) => (
            <Chip key={index} label={skill} />
          ))}
        </Box>
      </Box>

      {/* Interests Section */}
      <Box mt={3} mb={3}>
        <Typography variant="h5">Interests</Typography>
        <Box display="flex" gap={1} flexWrap="wrap">
          {interests.map((interest, index) => (
            <Chip key={index} label={interest} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default AboutMe;
