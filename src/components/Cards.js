import React from 'react';




const card = (props) => {

  return (
    <div className="card" style={{ width: 15 + 'rem' }}>
      <img className="card-img-top" src={props.source} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button href="#" className="btn btn-primary" onClick={props.ifdelete}>Delete</button>
      </div>
    </div>
  );

}
card.defaultProps = {
  title: "Oops! We are currently unable to load Title",
  description: "and the description too :(",
  source: "This is a default source"

}


export default card;
