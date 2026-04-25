import { Typography, Box, Paper, Chip, List, ListItem } from "@mui/material";

function ProfessionalProfile() {
  // Updated data
  const experience = [
    { role: "Capstone Project Lead (iEvaluate System)", company: "Cebu Technological University - Argao Campus", years: "2025 - Present" },
    { role: "Frontend Developer (Academic & Freelance Projects)", company: "Self-Projects", years: "2023 - Present" },
    { role: "IoT & Embedded Systems Developer", company: "School Projects (ESP8266 / Arduino)", years: "2024 - Present" },
  ];

  const education = [
    { degree: "BS in Information Technology", school: "Cebu Technological University - Argao Campus", years: "2022 - Present" },
  ];

  const featureProjects = [
    { name: "iEvaluate: AI-Driven Instructor Evaluation System", type: "Capstone Project" },
    { name: "Green Hub Marketplace", type: "Group Project" },
    { name: "Smart Parking System (IoT + Firebase)", type: "Group Project" },
    { name: "Task Management System Web App", type: "Personal Project" },
    { name: "IBarangay Information System", type: "Group Project" }
  ];

  return (
    <Box>

      {/* Professional Profile Header */}
      <Box textAlign="center" mt={4} mb={4}>
        <Typography variant="h3">Professional Profile</Typography>
        <Typography variant="subtitle1">
          Experience, Education & Projects
        </Typography>
      </Box>

      {/* Experience Section */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h5" gutterBottom>Experience</Typography>
        <List>
          {experience.map((exp, index) => (
            <ListItem key={index}>
              <Typography>
                {exp.role} at {exp.company} ({exp.years})
              </Typography>
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Education Section */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h5" gutterBottom>Education</Typography>
        <List>
          {education.map((edu, index) => (
            <ListItem key={index}>
              <Typography>
                {edu.degree}, {edu.school} ({edu.years})
              </Typography>
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Feature Projects Section */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h5" gutterBottom>Feature Projects</Typography>
        <Box display="flex" gap={1} flexWrap="wrap">
          {featureProjects.map((project, index) => (
            <Chip
              key={index}
              label={`${project.name} (${project.type})`}
              color="primary"
            />
          ))}
        </Box>
      </Paper>

    </Box>
  );
}

export default ProfessionalProfile;
