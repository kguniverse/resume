import { Chip, Grid, Paper, Box } from "@mui/material";

type skillsProps = {
  category: string;
  content: Array<string>;
};

function renderItem(item: skillsProps) {
  return (
    <Grid item xs={3} key={item.category}>
      <Box sx={{ border: 1 }}>
        <Paper elevation={0} sx={{ height: 140 }}>
          <h3 style={{ textAlign: "center" }}>
            <strong>{item.category}</strong>
          </h3>
          {item.content.map((item: string) => {
            return (
              <Chip
                label={item}
                variant="outlined"
                clickable
                sx={{ margin: "3px" }}
              />
            );
          })}
        </Paper>
      </Box>
    </Grid>
  );
}

export function Skills(props: { skills: Array<skillsProps> }) {
  return (
    <div className="section">
      <h2>
        <strong>Skills</strong>
      </h2>
      <Grid container spacing={2}>
        {props.skills.map((item: any) => {
          return renderItem(item);
        })}
      </Grid>
    </div>
  );
}
