import React from 'react'
import CardJson from "../card.json";
import Card from './Card';


const CardRow = (props) => {
  return (
    <>
        <div className="row" style={{"padding-bottom": "20px"}}>
            {
                CardJson.map((card,index)=>{
                    return(
                        <Card id={index} img={card.img_url} desc={card.desc} price={card.price} disprice={card.dis_price} />
                    )
                })
            }
        </div>
    </>
  )
}

export default CardRow;


