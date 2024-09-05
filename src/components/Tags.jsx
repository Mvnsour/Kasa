import '../sass/Tags.sass'

function Tags({ tags }) {
  return (
    <div className="tag-container">
      {tags.map((tag, index) => (
        <p key={index}>{tag}</p>
      ))}
    </div>
  )
}

export default Tags
