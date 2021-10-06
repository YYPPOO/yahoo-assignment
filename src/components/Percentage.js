const Percentage = ({ ratio }) => {
  return <span>
    {Math.round(ratio * 100)}%
  </span>
}

export default Percentage;