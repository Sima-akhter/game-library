import React from 'react'
import { Link } from 'react-router'

const Cards = ({ card }) => {
    const { title, coverPhoto, ratings, id } = card
    return (
        <div>


            <Link to={`/games/${id}`}>

                <div className="card bg-sky-100  shadow-sm hover:scale-105 transition ease-in-out border-2 border-sky-200">
                    <figure className='h-48 overflow-x-hidden'>
                        <img className='w-full object-cover'
                            src={coverPhoto}
                            alt="image" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className="flex justify-between">
                            <button className="btn bg-blue-800 hover:bg-blue-500 text-white"> {ratings} ⭐</button>
                        </div>
                    </div>
                </div>

            </Link>




        </div>
    )
}

export default Cards