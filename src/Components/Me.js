import React,{Fragment} from 'react'
//import { Container}
import Matrix from '../images/The-Matrix-code.jpg'

const Me = () => {
    return (
        <Fragment>
        <div className='me-image'>
            <div className='myself'>
            <p >
            Fully self-taught software engineer, 
            who enjoys learning something new every day, 
            learning has no limits.
            <p>Always looking 
            forward to taking on new challenges</p> 

            </p>
            <button href='#'>still under construction</button>
            </div>
            <div >
                <img className='image' src={Matrix} alt=""/>
            </div>
    
        </div>
            
            <hr/>
            
        </Fragment>
    )
}

export default Me
