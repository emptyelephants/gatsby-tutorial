import React from "react"
import Link from 'gatsby-link'

export default () =>
  <div stlye={{color:`tomato`}}>
    <h1>Hello World</h1>
    <p>What a world</p>
    <img src="https://source.unsplash.com/random/400x200" alt="random" />
    <br/>
    <div>
      <Link to='/page2/'> page 2 </Link>
    </div>
    <div>
      <Link to='/counter/'>counter</Link>
    </div>
  </div>
