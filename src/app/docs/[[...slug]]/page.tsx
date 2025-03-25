import React from 'react'

const Docs = async ({params}: {params: {slug: string[]}}) => {
    const {slug} = await params;
    console.warn('slug', slug);
  return (
    <div>
      <h1>Product Slug: {slug?.join(' / ')}</h1>
    </div>
  )
}

export default Docs
