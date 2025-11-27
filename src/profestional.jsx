import { Typography, Box, Paper, Chip, List, ListItem } from "@mui/material";

function ProfessionalProfile() {
  // Example data
  const experience = [
    { role: "IT Manager", company: "Company A", years: "2019 - Present" },
    { role: "Web Developer", company: "Company B", years: "2016 - 2019" },
  ];

  const education = [
    { degree: "BS in Programming", school: "Cebu Technological University", years: "2010 - 2014" },
  ];

  const featureProjects = [
    { name: "Green Hub Marketplace", type: "Group Project" },
    { name: "Task Management System", type: "Personal Project" },
    { name: "IBarangay", type: "Group Project" }
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
