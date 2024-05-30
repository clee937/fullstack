import "./CreateOnomatopoeia.scss";
import { useNavigate } from "react-router-dom";
import OnomatopoeiaRequest from "../../types/OnomatopoeiaRequest";
import OptionType from "../../types/OptionType";
import Form from "../../components/Form/Form";

type CreateOnomatopoeiaProps = {
  categories: OptionType[];
};

const CreateOnomatopoeia = ({ categories }: CreateOnomatopoeiaProps) => {
  const navigate = useNavigate();

  const handleSubmit = async (newOnomatopoeia: OnomatopoeiaRequest) => {
    const result = await fetch("http://localhost:8080/onomatopoeia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOnomatopoeia),
    });

    if (result.ok) {
      alert("Onomatopoeia added");
      const onomatopoeia = await result.json();
      navigate("/onomatopoeia/edit/" + onomatopoeia.id, {
        state: onomatopoeia,
      });
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = {
    id: -1,
    onomatopoeia: "",
    meaning: "",
    example: "",
    categoryId: -1,
  };

  return (
    <section className="create-onomatopoeia">
      <h2 className="create-onomatopoeia__title">Create an Onomatopoeia</h2>
      <Form
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Add a New Onomatopoeia"
        categories={categories}
      />
    </section>
  );
};

export default CreateOnomatopoeia;
