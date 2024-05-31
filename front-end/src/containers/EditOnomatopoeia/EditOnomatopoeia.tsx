import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form/Form";
import Onomatopoeia from "../../components/Onomatopoeia/Onomatopoeia";
import "./EditOnomatopoeia.scss";
import OnomatopoeiaRequest from "../../types/OnomatopoeiaRequest";
import OnomatopoeiaResponse from "../../types/OnomatopoeiaResponse";
import OptionType from "../../types/OptionType";

type EditOnomatopoeiaProps = {
  categories: OptionType[];
};

const getFormOnomatopoeia = (onomatopoeia: OnomatopoeiaResponse) => {
  return {
    id: onomatopoeia.id,
    onomatopoeia: onomatopoeia.onomatopoeia,
    meaning: onomatopoeia.meaning,
    example: onomatopoeia.example,
    categoryId: onomatopoeia.categoryId,
  };
};

const EditOnomatopoeia = ({ categories }: EditOnomatopoeiaProps) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [onomatopoeia, setOnomatopoeia] = useState<OnomatopoeiaResponse | null>(
    null
  );
  const [showForm, setShowForm] = useState(false);

  const getOnomatopoeiaById = async (id: number) => {
    const url = `http://localhost:8080/onomatopoeia/${id}`;
    const response = await fetch(url);
    const onomatopoeiaData = await response.json();
    setOnomatopoeia(onomatopoeiaData);
  };

  useEffect(() => {
    if (location.state) {
      setOnomatopoeia(location.state);
    } else {
      getOnomatopoeiaById(Number(id));
    }
  }, [id, location]);

  const handleUpdateOnomatopoeia = async (
    updatedOnomatopoeia: OnomatopoeiaRequest
  ) => {
    const result = await fetch(`http://localhost:8080/onomatopoeia/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedOnomatopoeia),
    });

    if (result.ok) {
      alert("Onomatopoeia updated");
      const updated = await result.json();
      setOnomatopoeia(updated);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleDeleteOnomatopoeia = async () => {
    const result = await fetch(`http://localhost:8080/onomatopoeia/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("Onomatopoeia deleted");
      navigate("/");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);

  //spinner
  if (!onomatopoeia) return "no onomatopoeia";

  const formOnomatopoeia: OnomatopoeiaRequest | null = onomatopoeia
    ? getFormOnomatopoeia(onomatopoeia)
    : null;

  return (
    <section className="edit-onomatopoeia">
      <h2 className="edit-onomatopoeia__title">Edit Onomatopoeia</h2>
      <div className="edit-onomatopoeia__content">
        <Onomatopoeia onomatopoeia={onomatopoeia} />
        <div className="edit-onomatopoeia__buttons">
          <button
            className={
              showForm
                ? "edit-onomatopoeia__button"
                : "edit-onomatopoeia__button edit-greeting__button--secondary"
            }
            onClick={handleShowForm}
          >
            Update
          </button>
          <button
            className="edit-onomatopoeia__button edit-onomatopoeia__button--secondary"
            onClick={handleDeleteOnomatopoeia}
          >
            Delete
          </button>
        </div>
      </div>
      {showForm && formOnomatopoeia && (
        <Form
          defaultFormState={formOnomatopoeia}
          formTitle="Update Onomatopoeia"
          handleSubmit={handleUpdateOnomatopoeia}
          categories={categories}
        />
      )}
    </section>
  );
};

export default EditOnomatopoeia;
