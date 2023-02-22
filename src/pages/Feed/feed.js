import React from 'react'

import { Link } from 'react-router-dom'

export default function feed() {
  return (
    <div>
      <h1>Page post</h1>

      <Link to='/post'>
        <button>Add new post</button>
      </Link>
    </div>
  )
}