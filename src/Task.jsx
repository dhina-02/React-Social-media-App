import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import List from "./components/List";


const Task = () => {
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        if (!response.ok) throw Error("Not found");
        const listItems = await response.json();
        setItems(listItems);
        console.log(listItems);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchApi())();
    }, 2000);
    
  }, []);

  return (
    <div>
      <Button/>
      <main>
        {isLoading && <p>Loading</p>}
        {error && <p>{`'Error:'${error}`}</p>}
        {!error && !isLoading && <List items={items} />}
      </main>
    </div>
  );
};

export default Task;
