function HostAndPicture({ host, picture }) {
  return (
    <div className="host-container">
      <h3>{host}</h3>
      <div>
        <img src={picture} alt={`${host} badge`} className="host-picture" />
      </div>
    </div>
  )
}

export default HostAndPicture
