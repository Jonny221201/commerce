import React from "react";
import '../styles/about.css'

const AboutPage = () => {
  return (
    <div>
      <div>
        <img
          style={{ height: "70vh", width: "100%" }}
          src="https://cdn.shopify.com/s/files/1/1869/0703/files/Upto50_Landing_Banner.jpg?v=1609999731" alt=''
        ></img>
      </div>
      <div className="flex justify-between flex-wrap container align-start ">
      <div  className="about-header w-percent-30 text-spacing my-50">
            <h1>JUST</h1>
            <h3>Modern Living Clothes</h3>
        </div>
        <div className='about-info flex-col w-percent-60 my-50'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
          aliquid amet dolorem cum asperiores officia fuga, quas eligendi velit
          aspernatur, vitae eaque. Aliquid tempora numquam, aliquam adipisci
          voluptatum ipsa, magnam quod fuga vitae fugiat pariatur laudantium
          doloremque alias unde molestiae, deserunt officiis praesentium at
          dolor? Quae eius nemo odio ipsum, repudiandae
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
          aliquid amet dolorem cum asperiores officia fuga, quas eligendi velit
          aspernatur, vitae eaque. Aliquid tempora numquam, aliquam adipisci
          voluptatum ipsa, magnam quod fuga vitae fugiat pariatur laudantium
          doloremque alias unde molestiae, deserunt officiis praesentium at
          dolor? Quae eius nemo odio ipsum, repudiandae
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
          aliquid amet dolorem cum asperiores officia fuga, quas eligendi velit
          aspernatur, vitae eaque. Aliquid tempora numquam, aliquam adipisci
          voluptatum ipsa, magnam quod fuga vitae fugiat pariatur laudantium
          doloremque alias unde molestiae, deserunt officiis praesentium at
          dolor? Quae eius nemo odio ipsum, repudiandae
        </p>
        </div>

      </div>
      
    </div>
  );
};

export default AboutPage;
