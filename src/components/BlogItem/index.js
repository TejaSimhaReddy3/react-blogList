import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {title, description, publishedDate} = itemDetails

  return (
    <>
      <li className="listItemsMain">
        <div className="blogListContainer">
          <h1 className="titleHead">{title}</h1>
          <p className="datePara">{publishedDate}</p>
        </div>
        <p className="descriptionData">{description}</p>
      </li>
      <hr />
    </>
  )
}

export default BlogItem
