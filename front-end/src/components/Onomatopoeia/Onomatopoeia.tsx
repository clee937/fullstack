import OnomatopoeiaResponse from "../../types/OnomatopoeiaResponse";
import "./Onomatopoeia.scss";

type OnomatopoeiaProp = {
  onomatopoeia: OnomatopoeiaResponse;
};

const Onomatopoeia = ({ onomatopoeia }: OnomatopoeiaProp) => {
  const {
    onomatopoeia: onomatopoeiaText,
    meaning,
    example,
    category,
  } = onomatopoeia;

  return (
    <div className="onomatopoeia">
      <h3 className="onomatopoeia__title">{onomatopoeiaText}</h3>
      <p className="onomatopoeia__text">Meaning: {meaning}</p>
      <p className="onomatopoeia__text">Example: {example}</p>
      <p className="onomatopoeia__text">Category: {category}</p>
    </div>
  );
};

export default Onomatopoeia;
