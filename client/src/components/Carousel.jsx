import { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function Carusel() {
  const [value, setValue] = useState(0);

  const onChange = (value) => {
    setValue(value);
  };
  return (
    <div>
      <Carousel value={value} onChange={onChange}>
        <img src="https://cdn.shopify.com/s/files/1/1869/0703/files/Upto50_Landing_Banner.jpg?v=1609999731" alt=''/>
        <img src="https://cdn.shopify.com/s/files/1/1869/0703/files/FW20_Editorial_Category_Banners_a618bd0e-4e59-4d8c-9622-fedceb5f4a01.jpg?v=1599590451" alt=''/>
        <img src="https://cdn.shopify.com/s/files/1/1869/0703/files/3rdParty_Homepage_Banner_1500x.progressive.jpg?v=1612382478" alt=''/>
      </Carousel>
      <Dots value={value} onChange={onChange} />
    </div>
  );
}

export default Carusel;
