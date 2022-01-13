import "./App.css";
import ImageSlider from "./componets/ImageSlider";
import { SliderData } from "./componets/SliderData";

function App() {
  return (
    <>
      <ImageSlider slides={SliderData} />
    </>
  );
}

export default App;
