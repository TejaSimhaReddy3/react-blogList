import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogItems} = props

  return (
    <div className="blogItemsContainer">
      {blogItems.map(eachItem => (
        <BlogItem key={eachItem.id} itemDetails={eachItem} />
      ))}
    </div>
  )
}

export default BlogList
