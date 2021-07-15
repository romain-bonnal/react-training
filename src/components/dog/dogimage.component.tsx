import React, { useEffect, useState } from 'react';

export default function DogImageComponent(): JSX.Element {
    const [dogImage, setDogImage] = useState()

    // 3. Create out useEffect function
    useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setDogImage(data.message))
     },[])

  return (
    <>
        <img src={dogImage} height="50px"></img>
    </>
  );
}
