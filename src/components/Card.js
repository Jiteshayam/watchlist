import React, {useState} from 'react';

function Card({id,name,year,About,image,imdb,removeShow}){
  const [readmore,  setReadmore] = useState(false)
  const description = readmore? About:`${About.substring(0,200)}.... `

  function ReadMoreHandler(){
    setReadmore(!readmore)
  }

  return(
    <div className="card" >
      <div className='sub-card'>

        <img src={image} alt="" className='image'></img>

          <h4 className="card-name">{name}</h4>
        <div className="show-detail">

          <h4 className="card-imdb">IMDb Rating {imdb}/10</h4>
          <h4 className="card-year">year {year}</h4>

          <div className="discription">
            {description}

            <span className='read-more' onClick={ReadMoreHandler}>
              {readmore ? 'show less': 'read more'   }
            </span>

          </div>

        </div>
        <button className='btn-red' onClick={()=> removeShow(id)}>
          Remove
        </button>
      </div>

    </div>
  )
}

export default Card