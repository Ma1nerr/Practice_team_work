import UserAvatar from './UserAvatar';

const UserCard = ({ name, position, avatar }) => {
  return (
    <div style={styles.card}>
      <UserAvatar src={avatar} alt={name} />
      <div style={styles.textContainer}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.position}>{position}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '150px',
    padding: '1em',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: '0.5em',
  },
  name: {
    fontSize: '1em',
    fontWeight: 'bold',
    color: '#333',
    margin: '0',
  },
  position: {
    fontSize: '0.9em',
    color: '#6a0dad',
    margin: '0.5em 0 0 0',
  },
};

export default UserCard;
