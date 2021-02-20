import "../styles/card.css";

const Card = () => {
  const cardDatas = [
    {
      image1:
        "//cdn.shopify.com/s/files/1/1869/0703/products/FW18_MTP9602_CARAMEL_DETAIL-1_250x250@2x.jpg?v=1542755814",
      image2: "https://cdn.shopify.com/s/files/1/1869/0703/products/FW18_MTP9602_CARAMEL_DETAIL-2_250x250@2x.jpg?v=1542755814",
    },
    {
      image1:
        "//cdn.shopify.com/s/files/1/1869/0703/products/STEPNEYWORKERSCLUB_DELLOWSUEDE_TAN_MTP0814B_2_250x250@2x.jpg?v=1602707262",
      image2: "https://cdn.shopify.com/s/files/1/1869/0703/products/STEPNEYWORKERSCLUB_DELLOWSUEDE_TAN_MTP0814B_3_250x250@2x.jpg?v=1602711952",
    },
    {
      image1:
        "//cdn.shopify.com/s/files/1/1869/0703/products/MAKR_ORGANIZERPOUCHLARGE_ARMYGREEN_MTP0805A_2_250x250@2x.jpg?v=1573573792",
      image2: "https://cdn.shopify.com/s/files/1/1869/0703/products/MAKR_ORGANIZERPOUCHLARGE_ARMYGREEN_MTP0805A_1_250x250@2x.jpg?v=1573573799",
    },
    {
      image1:
        "//cdn.shopify.com/s/files/1/1869/0703/products/20oz_black_Wide-mouth_bottle_250x250@2x.jpg?v=1597758578",
      image2: "https://cdn.shopify.com/s/files/1/1869/0703/products/20oz_white_widemouth_bottle_250x250@2x.jpg?v=1597861535",
    },
  ];

  // const changeImageOnHover = () => {
  //   document.querySelector('.imageChangeHover').src = cardDatas.map( cardData => {
  //     if(cardData.image1) {
  //       return cardData.image2
  //     } else {
  //       return cardData.image1
  //     }
  //   }
  //   )
  // }
  // const resetImageOnHover = () => {
  //   document.querySelector('.imageChangeHover').src = cardDatas.map( cardData => {
  //     if(cardData.image2) {
  //       return cardData.image1
  //     } 
  //   }
  //   )
  // }


  
  // onMouseOver={changeImageOnHover} onMouseOut={resetImageOnHover}
  return (
    <>
      <div className="cardContainer flex">
        {cardDatas.map((cardData, index) => ( 
          <div key={index} className="cardInfoContainer my-20">
            <img className='imageChangeHover'  src={cardData.image1} alt="" />
            <h6 className="lightGrey fontEleven">MAKR</h6>
            <h5 className="darkGrey fontThirteen">ORGANIZER POUCH LARGE</h5>
            <p className="darkGrey fontEleven">
              Regular price$100.00 $80.00 SALE
            </p>
            <p className="lighterGrey fontEleven">MORE COLORS AVAILABLE</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
