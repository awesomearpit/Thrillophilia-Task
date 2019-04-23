import React from 'react'


const AttractionCard = (props) => {
  return (
    <>
        <div className="col-3">
          <div className="attraction-body-card">
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
            <div className="row">
              <div className="col-md-12" style={{"margin-top": "35%"}}>
                  <div className="attraction-card-sub">
                    <p>{props.otherhead}</p>
                    <p style={{"font-size": "20px","color": "#000"}}>
                      <span style={{"font-size":"15px"}}>&#8377;</span>&nbsp;{props.price}
                    </p>
                  </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
    </>
  )
}

export default AttractionCard;


