const UserAvatar = ({ src, alt }) => {
  return <img src={src} alt={alt} style={styles.photo} />;
};

const styles = {
  photo: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
};

export default UserAvatar;
