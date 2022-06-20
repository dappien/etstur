import React from 'react'
import { useRouter } from 'next/router'

function SingleSearchPage() {
const router = useRouter()
const { url } = router.query
  return (
    <div>{url}</div>
  )
}

export default SingleSearchPage



