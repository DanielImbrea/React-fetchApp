import React, {useState, useEffect} from "react";
import ContactCard from "./ContactCard";
import "./App.css";

function App() {

  // const contacts = [
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Daniel Imbrea",
  //     email: "dani_imbrea@yahoo.com",
  //     age: 25,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Ovidiu Mihaita",
  //     email: "mihaita_parnaias@yahoo.com",
  //     age: 2,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Andreas George",
  //     email: "george_andreas@yahoo.com",
  //     age: 28,
  //   },
  // ];

  const [results, setResults] = useState([]);
useEffect(() => {
  fetch("https://randomuser.me/api/?results=6")
    .then(response => response.json())
    .then(data => {
      setResults(data.results);
    });
}, [])


  return (
    <div>
      {
        results.map((result, index) => {
            return (
              <ContactCard
                key={index}
                avatarUrl={result.picture.large}
                name={result.name.first}
                email={result.email}
                age={result.dob.age}
              />
            );
        })
      }
      {/* <ContactCard
        avatarUrl="https://via.placeholder.com/150"
        name="Daniel Imbrea"
        email="dani_imbrea@yahoo.com"
        age={25}
      />
      <ContactCard
        avatarUrl="https://via.placeholder.com/150"
        name="Ovidiu Mihaita"
        email="mihaita_parnaias@yahoo.com"
        age={2}
      />
      <ContactCard
        avatarUrl="https://via.placeholder.com/150"
        name="Andreas George"
        email="george_andreas@yahoo.com"
        age={28}
      /> */}
    </div>
  );
}

export default App;
