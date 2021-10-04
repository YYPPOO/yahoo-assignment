const Heart = ({ isActived = false }) => {
  return <span>{isActived ? '❤️' : '🤍'}</span>
}

export default Heart;