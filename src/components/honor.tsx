type honorProp = {
  name: string;
  date: string;
};

function renderItem(item: honorProp) {
  return (
    <div>
      <h3>
        <strong>{item.name}</strong>
        <code>{item.date}</code>
      </h3>
      <br />
    </div>
  );
}

export function Honor(props: { honor: Array<honorProp> }) {
  const honor = props.honor;
  return (
    <div className="section">
      <h2>
        <strong>Honor</strong>
      </h2>
      {honor.map((item: any) => {
        return renderItem(item);
      })}
    </div>
  );
}
