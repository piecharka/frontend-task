import { useCallback, useEffect, useState } from "react";
import Carousel from "./components/Carousel/Carousel";
function App() {
  const [data, setData] = useState([]);
  const fetchData = useCallback(async () => {
    const json = await fetch(`https://picsum.photos/v2/list`)
      .then((response) => response.json())
      .then((data) => data);
    console.log(json);
    setData(json);
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Carousel data={data} />
    </div>
  );
}

export default App;
