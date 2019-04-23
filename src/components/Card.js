import React from 'react'


const Card = (props) => {
  return (
    <>
        <div className="col-3">
          <div className="body-card">
            <div className="body-card-image">
              <img src={props.img} />
            </div>
            <div className="body-card-content">
              <div className="row">
                <div style={{"height":"40px"}} className="col-md-12">
                  <p style={{"padding":" 0 5px","margin-top": "5px","color":"#3b444e","font-size":"15px"}}>{props.desc}</p>
                </div>
                <div className="desces">
                  <div className="row">
                    <div className="col-6" style={{"padding-left":"25px"}}>
                      <p style={{"font-size": "20px","color": "#000","margin":"0"}}>
                      <span style={{"font-size":"15px"}}>&#8377;</span>&nbsp;{props.disprice}
                      </p>
                    </div>
                    <div className="col-6" style={{"padding-left": "46px"}}>
                    <p className="header-review-count clearfix">
                      <i class="fa fa-star star-filled" aria-hidden="true"></i>
                      <i class="fa fa-star star-filled" aria-hidden="true"></i>
                      <i class="fa fa-star star-filled" aria-hidden="true"></i>
                      <i class="fa fa-star star-filled" aria-hidden="true"></i>
                      <i class="fa fa-star star-filled" aria-hidden="true"></i>
                    </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6" style={{"padding-left":"25px"}}>
                      <p style={{"font-size": "17px","color": "#d3d3d3","text-decoration":"line-through"}}>
                        <span style={{"font-size":"15px"}}>&#8377;</span>&nbsp;{props.price}
                      </p>
                    </div>
                    <div className="col-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card;


