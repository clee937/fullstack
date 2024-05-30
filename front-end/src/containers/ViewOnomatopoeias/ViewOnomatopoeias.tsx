import { useState, useEffect, ChangeEvent } from "react";
import "./ViewOnomatopoeias.scss";
import OnomatopoeiaResponse from "../../types/OnomatopoeiaResponse";
import OnomatopoeiasList from "../../components/OnomatopoeiasList/OnomatopoeiasList";
import Select from "../../components/Select/Select";
import OptionType from "../../types/OptionType";

type ViewOnomatopoeiasProps = {
  categories: OptionType[];
};

const default_onomatopoeia = "View all";

const ViewOnomatopoeias = ({ categories }: ViewOnomatopoeiasProps) => {
  const [onomatopoeias, setOnomatopoeias] = useState<OnomatopoeiaResponse[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const getOnomatopoeias = async (
    category: string,
    categoriesArr: OptionType[]
  ) => {
    let url = "http://localhost:8080/onomatopoeias";

    if (category && !category.includes(default_onomatopoeia)) {
      const categoryParam = categoriesArr.find(
        (cat) => cat.id.toString() === category
      )?.name;
      url += `?categoryName=${categoryParam}`;

      console.log(`typeof category is: ${typeof category}`);
      console.log(`CategoryArray is: ${categoriesArr}`);
      console.log(`The url is is: ${url}`);
    }

    const response = await fetch(url);
    const onomatopoeiaData = await response.json();
    console.log(`Onomatopoeia data: ${onomatopoeiaData}`);
    setOnomatopoeias(onomatopoeiaData);
  };

  useEffect(() => {
    getOnomatopoeias(selectedCategory, categories);
  }, [selectedCategory, categories]);

  const handleSelectCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(`typeof: ${typeof event.currentTarget.value}`);
    console.log(`Event: ${typeof event.currentTarget}`);
    setSelectedCategory(event.currentTarget.value);
  };

  return (
    <section className="view-onomatopoeias">
      <h2 className="view-onomatopoeias__title">Japanese Onomatopoeias…</h2>
      <form className="view-onomatopoeias__form">
        <Select
          defaultOption={default_onomatopoeia}
          defaultValue={selectedCategory}
          options={categories}
          onChange={handleSelectCategory}
          label="categories"
          labelText="Select a category: "
        />
      </form>
      <OnomatopoeiasList onomatopoeias={onomatopoeias} />
    </section>
  );
};

export default ViewOnomatopoeias;
