import EmailIcon from "@mui/icons-material/Email";
import "./header.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = (props: { contact: any }) => {
  return (
    <div id="contact-info">
      <EmailIcon />
      <a href={"mailto:" + props.contact.email}>{props.contact.email}</a>
      &emsp;&emsp;
      <GitHubIcon />
      <a href={"https://" + props.contact.github}>{props.contact.github}</a>
    </div>
  );
};
export function Header(props: { name: string; contact: any }) {
  const name = props.name;
  const contact = props.contact;
  return (
    <div className="header-resume">
      <h1>{name}</h1>
      <Contact contact={contact} />
    </div>
  );
}
