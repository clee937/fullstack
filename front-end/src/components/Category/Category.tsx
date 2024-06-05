import "./Category.scss";

type CategoryProps = {
  category: string;
  info: string;
};

const Category = ({ category, info }: CategoryProps) => {
  return (
    <section className="category">
      <h2 className="category__heading">{category}</h2>
      <p className="category__info">{info}</p>
    </section>
  );
};

export default Category;
