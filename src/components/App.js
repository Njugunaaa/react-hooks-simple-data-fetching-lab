// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogPic, setDogPic] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogPic(data.message);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch dog:", err);
        setIsLoading(false);
      });
  }, []);''

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogPic} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
