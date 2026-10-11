import { useState } from 'react';
import './Home.css';
import Header from "../../components/Header.jsx";
import Menu from "../../components/Menu.jsx";
import FoodDisplay from "../../components/FoodDisplay.jsx";
import AppDownload from "../../components/AppDownload.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
