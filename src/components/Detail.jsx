import React from 'react'

const Detail = () => {
  return (
    <div className='rout'>
      <label> <b>personal Details</b></label>
      <ul style={{marginTop:"30px"}}>
        <li className='detss-list'>I'm <b>Kevin</b> 23" years old</li>
        <li className='detss-list'>web developer</li>
        <ul className='detss-list'>
          <li className='detss-list'><b>Contact details</b></li>
          <li className='detss-list'><b>Mail</b>    :iamkevinp11@gmail.com</li>
          <li className='detss-list'><b>Phone</b>   : +91-9176427795</li>
          <li className='detss-list'><b>Linkedin</b>:kevin</li>
          <li className='detss-list'><b>Github</b>  : <a href="https://github.com/0ldhands/finance-app.git">https://github.com/0ldhands/finance-app.git</a> </li>
        </ul>
        <ul className='detss-list'>
          <li className='detss-list'><b>Address</b></li>
          <li className='detss-list'>Arulpuram,palladam,Tituppur</li>
        </ul>
      </ul>
    </div>
  )
}

export default Detail