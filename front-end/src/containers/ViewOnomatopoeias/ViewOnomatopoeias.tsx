import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "./ViewOnomatopoeias.scss";
import OnomatopoeiaResponse from "../../types/OnomatopoeiaResponse";
import OnomatopoeiasList from "../../components/OnomatopoeiasList/OnomatopoeiasList";
import Select from "../../components/Select/Select";
import OptionType from "../../types/OptionType";
import Spinner from "../../components/Spinner/Spinner";
import SearchBar from "../../components/Search/Search";
import Category from "../../components/Category/Category";

type ViewOnomatopoeiasProps = {
  categories: OptionType[];
};

const default_onomatopoeia = "View all";

const ViewOnomatopoeias = ({ categories }: ViewOnomatopoeiasProps) => {
  const [onomatopoeias, setOnomatopoeias] = useState<OnomatopoeiaResponse[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

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
    }

    const response = await fetch(url);
    const onomatopoeiaData = await response.json();
    setOnomatopoeias(onomatopoeiaData);
  };

  useEffect(() => {
    getOnomatopoeias(selectedCategory, categories);
  }, [selectedCategory, categories]);

  const handleSelectCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.currentTarget.value);
  };

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

  const filteredOnomatopoeias: OnomatopoeiaResponse[] = onomatopoeias.filter(
    (onomatopoeia) => {
      if (searchTerm) {
        return onomatopoeia.onomatopoeia.toLowerCase().includes(searchTerm);
      }
      return onomatopoeia;
    }
  );

  const isLoading = !(onomatopoeias.length > 0) && !(categories.length > 0);

  if (isLoading) return <Spinner />;

  return (
    <section className="view-onomatopoeias">
      <h2 className="view-onomatopoeias__title">Japanese Onomatopoeia</h2>
      <form className="view-onomatopoeias__form">
        <SearchBar
          label="Search"
          searchTerm={searchTerm}
          placeHolderText="Search by name..."
          handleInput={handleInput}
        />

        <Select
          defaultOption={default_onomatopoeia}
          defaultValue={selectedCategory}
          options={categories}
          onChange={handleSelectCategory}
          label="categories"
          labelText="Select a category"
        />
      </form>
      {selectedCategory && selectedCategory != "View all" && (
        <Category
          category={onomatopoeias[0].category.name}
          info={onomatopoeias[0].category.categoryInfo}
        />
      )}
      <OnomatopoeiasList onomatopoeias={filteredOnomatopoeias} />
    </section>
  );
};

export default ViewOnomatopoeias;
