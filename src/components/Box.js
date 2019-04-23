import React from 'react'
import Boxlist from './Boxlist';

const BoxArray = ["Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka","Adventure in Srilanka"]

const Box = (props) => {
  return (
    <>
        <p style={{"font-size":"20px"}}>{props.Heading}</p>
        <div className="row">
            <div className="col-12">
                <ul className="box-ul">
                    {
                        BoxArray.map((box,index) => {
                            return(
                            <Boxlist id={index} box={box} />
                            );
                        })
                    }    
                </ul>
            </div>
        </div>
    </>
  )
}

export default Box;