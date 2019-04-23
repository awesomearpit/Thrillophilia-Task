import React from 'react'

const Form = () => {
  return (
    <div className="row" style={{"padding":"20px","padding-left":"10px"}}>
      <textarea className="form-textarea" placeholder="Please write your question here"></textarea>
      <div className="col-12" style={{"height":"10px"}}></div>
      <div style={{"padding-left": "89%"}}>
      <button className="btn btn-danger" style={{"background": "#f16f30","font-size": "12px"}}>Submit Question</button>
      </div>
    </div>
  )
}

export default Form;