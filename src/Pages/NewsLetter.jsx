import React from 'react'
import { toast } from 'react-toastify';

const NewsLetter = () => {
    const handleSubscribe = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value

        if (!email){
            toast.error('Please enter your email!')
            return
        }

        if (!name){
            toast.error('Please enter your name!')
            return
        }

        toast.success('You have subscribed our newsletter succesfully!')
        

    }
    return (
        <div>
            <div className='my-10 '>
                <h1 className='text-2xl text-blue-800 text-center font-bold text-shadow-2xs'>Subscribe our Newsletter </h1>

                <div className="flex justify-center">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body mx-auto">
                                <form onSubmit={handleSubscribe}>
                                    <fieldset className="fieldset">
                                        <label className="label">Email</label>
                                        <input name='email' type="email" className="input" placeholder="Email" />
                                        <label className="label">Name</label>
                                        <input name='name' type="name" className="input" placeholder="name" />

                                        <button className="btn bg-blue-800 text-white mt-4">Subscribe</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default NewsLetter