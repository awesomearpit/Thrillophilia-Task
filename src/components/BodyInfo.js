import React from 'react'
import CardRow from './CardRow';
import AttractionCardRow from './AttractionCardRow';
import Form from './Form';
import GuideCardRow from './GuideCardRow';
import Box from './Box';

const BodyInfo = (props) => {
  return (
    <div className="container">
      <p className="body-info">A land of myth, legend, history and one of the richest cultures, Sri Lanka is one of the hottest travel destinations and lures adventurers of all kinds. Perhaps you’re someone who loves the solitude of nature and steady walks through trails. Maybe you love relaxing by the sea with the sun warming your face and a cool breeze caressing your skin. Or, maybe it’s nightlife you crave and a little game of chance at a casino – whatever your thrill is,with the 
      &nbsp;<strong>best tourist places to visit in Sri Lanka</strong>, this island nation has it all.</p>
      <p style={{"font-size":"15px","color":"rgb(241, 111, 50)"}}>Show more</p>
      <br />
      <p style={{"font-size":"20px"}}><span style={{"color":"rgb(241, 111, 50)","font-weight":"bold"}}>Thrillophilia</span> Recommendations for Srilanka</p>
      <CardRow />
      <CardRow />
      <p style={{"font-size":"20px"}}> Things to do in Srilanka</p>
      <CardRow />
      <p style={{"font-size":"20px"}}> Srilanka Tours</p>
      <CardRow />
      <br />
      <p style={{"font-size":"20px"}}> Attractions</p>
      <AttractionCardRow />
      <AttractionCardRow />
      <br />
      <p style={{"font-size":"20px"}}> Ask a Question</p>
      <Form />
      <br />
      <p style={{"font-size":"20px"}}> Travel Guides for Srilanka</p>
      <GuideCardRow />
      <GuideCardRow />
      <Box Heading={"More Things to do in Srilanka"} /><br />
      <Box Heading={"Top Srilanka Attractions"} /><br />
      <Box Heading={"Most Popular Places Around Srilanka"} />
    </div>
  )
}

export default BodyInfo;
