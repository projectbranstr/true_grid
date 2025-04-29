import React, { useEffect, useState } from 'react'
import "./formpopup.scss"


function FormPopup({onClick}) {


    return (
        <form className='true_grid_pop_form ' onClick={onClick}>

            {/* {isOpen && ( */}
            <div className="true_grid_form_layout">
                <h className="form_heading">Join our Waitlist</h>
                <input type='text' className="true_grid_form_field" placeholder='Email*' />
                <input type='text' className="true_grid_form_field" placeholder='Name*' />
                <select className='true_grid_form_field'>

                    <option> Personal Use</option>
                    <option> Use in my Organization</option>
                    <option> Use in my Product or Service</option>

                </select>
                <select className='true_grid_form_field'>
                    <option> Finacial</option>
                    <option> Sports </option>
                    <option> Places</option>
                </select>

                <input type='text' className="true_grid_form_field" placeholder='Company Name*' />
                <input type='text' className="true_grid_form_field" placeholder='Title*' />
                <button className='requested_btn js_join_now_btn' type='submit'>Join Now</button>
                
            </div>
            {/* )} */}

        </form>
    )
}

export default FormPopup
