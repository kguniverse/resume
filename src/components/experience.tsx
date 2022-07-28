type experienceProps = {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
};

function renderItem(item: experienceProps) {
  return (
    <div>
      <h3>
        <strong>{item.name}</strong>
        <code>{item.startDate + " - " + item.endDate}</code>
      </h3>
      <p>
        <em>{item.position}</em>
        <br />
        {item.description}
      </p>
    </div>
  );
}

export function Experience(props: { experience: Array<any> }) {
  const experience = props.experience;
  return (
    <div className="section">
      <h2>
        <strong>Experience</strong>
      </h2>
      {experience.map((item: any) => {
        return renderItem(item);
      })}
    </div>
  );
}
