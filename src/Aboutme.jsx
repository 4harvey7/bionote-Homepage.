import { Avatar, Typography, Box, Paper, Chip } from "@mui/material";
import profilePic from "./assets/profilepic.jpg";

function AboutMe() {
  // Updated data
  const skills = [
    "React",
    "JavaScript",
    "Python",
    "C#",
    "SQL",
    "CSS",
    "HTML",
    "Node.js",
    "Firebase",
    "IoT (ESP8266 / Arduino)"
  ];

  const interests = [
    "Web Development",
    "AI & Automation",
    "Motorcycles",
    "Gaming",
    "Tech Innovation",
    "Building Projects"
  ];

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
          IT Student | Programmer | Capstone Developer
        </Typography>
      </Box>

      {/* About Section */}
      <Paper>
        <Box p={2}>
          <Typography variant="h5">About Me</Typography>
          <Typography>
            Hi! I am Rodz Harvey, an IT student from Cebu Technological University - Argao Campus.
            I specialize in web development, IoT systems, and AI-assisted applications. I enjoy
            building real-world systems like Smart Parking and AI-based evaluation platforms,
            and I am always exploring new technologies to improve my skills.
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
