import React, { useRef } from 'react'

import useScript from '../../lib/use-script'

const Comments = () => {
  const comment = useRef(null)

  const status = useScript({
    url: 'https://utteranc.es/client.js',
    theme: 'github-dark',
    issueTerm: 'url',
    repo: 'the-grateful-ed/eds-fresh-blog',
    ref: comment,
  })

  console.log(status)
  return (
    <div className="mx-auto w-full max-w-lg">{<div ref={comment}></div>}</div>
  )
}

export default Comments
