import styles from './Star.module.scss';

const Star = ({ isHalf = false }) => {
  return <img
    className={styles.icon}
    src={`${process.env.PUBLIC_URL}/icons/star${isHalf ? 'Half' : ''}.png`}
    alt="star"
  />
}

export default Star;