const Card = ({ title, tags, desc }) => {
  return (
    <section>
      <h3>{title}</h3>
      <span>{desc}</span>
    </section>
  );
};

export default Card;
