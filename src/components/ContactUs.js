import React from 'react'
import './contct.css'
function ContactUs(props) {
  return (
    <div className="card mb-3"  style={{backgroundColor: props.mode==='light'? '#8AC7DB':'#A4A690',color: props.mode==='light'? 'white':'white'}} >
    <div className="row g-0">
      <div className="col-md-4">
        <img src="/contact.jpg" className="card-img-top" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Contact Us</h5>
          <p className="card-text">    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dignissimos itaque beatae excepturi amet. Possimus, 
          corporis optio ut quas consectetur ullam iusto totam aliquam mollitia ipsam sint autem repellat distinctio adipisci odit! Incidunt officia beatae ut ipsam facilis consequuntur exercitationem, unde a fugiat sunt ullam illum laboriosam dicta, quia omnis assumenda ducimus eos reiciendis culpa mollitia autem, quasi blanditiis reprehenderit error! Officia cupiditate recusandae corrupti perspiciatis a sapiente consequuntur, maiores atque laborum blanditiis dicta nihil nesciunt consectetur earum pariatur provident veritatis possimus obcaecati? Dignissimos optio molestiae repellat enim assumenda odio, 
          voluptatum distinctio voluptatibus velit nesciunt, 
          ipsam ratione, accusantium recusandae debitis adipisci!
          This is a wider card with supporting text below as a natural lead-in to additional content. 
          This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactUs
