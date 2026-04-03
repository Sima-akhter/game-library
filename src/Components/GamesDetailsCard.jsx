import React from 'react'

const GamesDetailsCard = ({games}) => {

const {coverPhoto, title, category, downloadLink, description, ratings, developer } = games

    console.log(games);
    
  return (
    <div >
       <title> Details</title>
     <div className="card card-side bg-sky-100 shadow-sm ">
  <figure>
    <img
      src={coverPhoto}
      alt="Movie" />
  </figure>
  <div className="card-body ">
       <h2 className="card-title">{title}</h2>
    <p><span className='font-bold'>Category :</span> {category}</p>
    <h1><span className='font-bold'>Download : </span> {downloadLink}</h1>
    
    <div className="card-actions flex justify-between ">
      <button className="btn bg-blue-800 text-white hover:bg-blue-500">{ratings} M</button>
      <button className="btn bg-blue-800 text-white hover:bg-blue-500">{developer}</button>
    </div>
  </div>
  </div>


     <div className='mt-10'>
        <h1><span className='font-bold'>Description :</span> {description}</h1>
     </div>

 </div>
  )
}

export default GamesDetailsCard