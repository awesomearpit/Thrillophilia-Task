import React from 'react'
import CardJson from "../attractioncard.json";
import GuideCard from './GuideCard';


const GuideCardRow = (props) => {
  return (
    <>
        <div className="row" style={{"padding-bottom": "20px"}}>
            {
                CardJson.map((card,index)=>{
                    return(
                        <GuideCard id={index} img={card.img_url} head={card.head} desc={card.desc} />
                    )
                })
            }
        </div>
    </>
  )
}

export default GuideCardRow;


