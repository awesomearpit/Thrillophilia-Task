import React from 'react'
import CardJson from "../attractioncard.json";
import AttractionCard from './AttractionCard';


const AttractionCardRow = (props) => {
  return (
    <>
        <div className="row" style={{"padding-bottom": "20px"}}>
            {
                CardJson.map((card,index)=>{
                    return(
                        <AttractionCard id={index} img={card.img_url} head={card.head} desc={card.desc} otherhead={card.other_head} price={card.price} />
                    )
                })
            }
        </div>
    </>
  )
}

export default AttractionCardRow;


