import Card from './Card'

function Shows(props){
  return(
  <div className='cards'>
    {
      props.Shows.map((show)=>{
        return <Card  {...show} removeShow={props.removeShow} key={show.id}></Card>
      })
    }
  </div>
  )
}

export default Shows