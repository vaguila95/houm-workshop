interface PropertyProps {
  id: number;
  name: string;
}

const Property = ({ id, name }: PropertyProps) => {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}

export default Property;