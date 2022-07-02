import "./App.scss";
import Header from "./components/header/Header";
import Gallery from "./components/gallery/Gallery";

// 563492ad6f9170000100000180b552d6cce84592b36d72024d9350df
//https://api.pexels.com/v1/curated?page=1&per_page=15

function App() {
  return (
    <div className="App">
      <Header />

      <Gallery />
      <button className="bg-indigo-800 p-2.5 text-white px-4">More</button>
    </div>
  );
}

export default App;
