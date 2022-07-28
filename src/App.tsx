import { data } from "./services/data";
import { Container } from "@mui/material";
import { Header } from "./components/header";
import { Education } from "./components/education";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Experience } from "./components/experience";
import { Skills } from "./components/skills";
import { Honor } from "./components/honor";
import "./App.css";

function App() {
  const { name, contact, education, experience, skills, honor } = data;
  console.log(contact);
  return (
    <Container maxWidth={"xl"}>
      <Header name={name} contact={contact} />
      <Education education={education} />
      <Experience experience={experience} />
      <Skills skills={skills} />
      <Honor honor={honor} />
    </Container>
  );
}

export default App;
