import React from 'react'


const GuideCard = (props) => {
  return (
    <>
        <div className="col-3">
          <div className="attraction-body-card" style={{"height":"340px"}}>
            <div className="attraction-card-image">
              <img src={props.img} />
            </div>
            <div className="body-card-content">
              <div className="row">
                <div style={{"height":"40px"}} className="col-md-12">
                  <p style={{"padding":" 0 5px","margin-top": "5px","color":"#3b444e","font-size":"15px"}}>{props.head}</p>
                  <span className="more-content">{props.desc}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default GuideCard;


