import "./App.scss";
import Home from "./containers/Home/Home";
import ViewOnomatopoeias from "./containers/ViewOnomatopoeias/ViewOnomatopoeias";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import OptionType from "./types/OptionType";
import CreateOnomatopoeia from "./containers/CreateOnomatopoeia/CreateOnomatopoeia";
import EditOnomatopoeia from "./containers/EditOnomatopoeia/EditOnomatopoeia";

const App = () => {
  const [categories, setCategories] = useState<OptionType[]>([]);

  const getCategories = async () => {
    const response = await fetch(
      "http://localhost:8080/onomatopoeias/categories"
    );

    const onomatopoeaisData = await response.json();
    setCategories(onomatopoeaisData);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/onomatopoeias"
          element={<ViewOnomatopoeias categories={categories} />}
        />
        <Route
          path="/onomatopoeia/create"
          element={<CreateOnomatopoeia categories={categories} />}
        />
        <Route
          path="/onomatopoeia/edit/:id"
          element={<EditOnomatopoeia categories={categories} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
