import React from 'react'

import { Link } from 'react-router-dom'

export default function post() {
  return (
    <div>
      <h1>Page post</h1>

      <Link to="/">
        <button>Voltar pro feed</button>
      </Link>
    </div>
  )
}
