type educationProps = {
  name: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
};

function renderList(item: educationProps) {
  return (
    <div>
      <h3>
        <strong>{item.name}</strong>
        <code>{item.startDate + " - " + item.endDate}</code>
      </h3>
      <ul>
        <li>
          <strong>{item.degree}</strong>
          &emsp;
          {item.major}
        </li>
      </ul>
    </div>
  );
}

export function Education(props: { education: Array<educationProps> }) {
  const education = props.education;
  return (
    <div className="section">
      <h2>
        <strong>Education</strong>
      </h2>
      {education.map((item: any) => {
        return renderList(item);
      })}
    </div>
  );
}
