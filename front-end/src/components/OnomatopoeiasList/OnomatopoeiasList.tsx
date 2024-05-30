import "./OnomatopoeiasList.scss";
import Onomatopoeia from "../Onomatopoeia/Onomatopoeia";
import OnomatopoeiaResponse from "../../types/OnomatopoeiaResponse";
import { Link } from "react-router-dom";

type OnomatopoeiasListProps = {
  onomatopoeias: OnomatopoeiaResponse[];
};

const OnomatopoeiasList = ({ onomatopoeias }: OnomatopoeiasListProps) => {
  return (
    <>
      <div className="onomatopoeia-list">
        {onomatopoeias.map((onomatopoeia) => (
          <Link
            key={onomatopoeia.id}
            to={`/onomatopoeia/edit/${onomatopoeia.id}`}
            style={{ textDecoration: "none" }}
          >
            <Onomatopoeia onomatopoeia={onomatopoeia} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default OnomatopoeiasList;
