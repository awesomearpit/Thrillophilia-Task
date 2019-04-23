import React from 'react'

const Body = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 no-padding">
            <div className="jumbotron">
                <div className="row">
                    <div className="col-4 offset-1">
                        <p>User Reviews</p>
                        <p className="header-review-count clearfix">
                          <i class="fa fa-star star-filled" aria-hidden="true"></i>
                          <i class="fa fa-star star-filled" aria-hidden="true"></i>
                          <i class="fa fa-star star-filled" aria-hidden="true"></i>
                          <i class="fa fa-star star-filled" aria-hidden="true"></i>
                          <i class="fa fa-star star-filled" aria-hidden="true"></i>
                          &nbsp; 3 Reviews
                        </p>
                    </div>
                    <div className="col-7">
                      <ul className="brand-logos pull-right clearfix">
                        <p className="trusted-brand">Top Trusted Travel Brand</p>
                      </ul>
                    </div>
                </div>
            </div>        
        </div>
        <div className="col-11 offset-1 no-padding">
          <ul className="breadcrumbs_wrapper">
            <li>
              <a href="/">Home &nbsp;>&nbsp;</a>
            </li>
            <li>
              Srilanka
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Body
