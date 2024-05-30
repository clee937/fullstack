import { ChangeEvent, FormEvent, useState } from "react";
import OnomatopoeiaRequest from "../../types/OnomatopoeiaRequest";
import OptionType from "../../types/OptionType";
import "./Form.scss";
import Select from "../Select/Select";

type FormProps = {
  defaultFormState: OnomatopoeiaRequest;
  formTitle: string;
  handleSubmit: (onomatopoeia: OnomatopoeiaRequest) => void;
  categories: OptionType[];
};

const Form = ({
  defaultFormState,
  handleSubmit,
  formTitle,
  categories,
}: FormProps) => {
  const [onomatopoeia, setOnomatopoeia] =
    useState<OnomatopoeiaRequest>(defaultFormState);

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(onomatopoeia).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(onomatopoeia);
  };

  const handleInput = (
    event: FormEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    key: string
  ) => setOnomatopoeia({ ...onomatopoeia, [key]: event.currentTarget.value });

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <Select
          labelText={"Select category : "}
          label={"categoryId"}
          options={categories}
          onChange={(event) => handleInput(event, "categoryId")}
          defaultOption={"---"}
          defaultValue={onomatopoeia.categoryId.toString()}
        />
        <label htmlFor="onomatopoeia">Onomatopoeia :</label>
        <input
          id="onomatopoeia"
          className="form-container__input"
          type="text"
          placeholder="onomatopoeia"
          value={onomatopoeia.onomatopoeia}
          onInput={(event) => handleInput(event, "onomatopoeia")}
        />
        <label htmlFor="meaning">Meaning :</label>
        <input
          id="meaning"
          className="form-container__input"
          placeholder="meaning"
          value={onomatopoeia.meaning}
          type="text"
          onInput={(event) => handleInput(event, "meaning")}
        />
        <label htmlFor="exampe">Example :</label>
        <input
          id="example"
          className="form-container__input"
          placeholder="example"
          value={onomatopoeia.example}
          type="text"
          onInput={(event) => handleInput(event, "example")}
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
