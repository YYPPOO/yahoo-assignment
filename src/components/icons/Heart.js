import styles from './Heart.module.scss';

const Heart = ({ isActived = false }) => {
  return <img
    className={styles.icon}
    src={`${process.env.PUBLIC_URL}/icons/heart${isActived ? '' : 'Outline'}.png`}
    alt="heart"
  />
}

export default Heart;