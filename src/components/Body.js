import UserCard from './User/UserCard';

const users = [
  {
    id: 0,
    name: 'Nazarii Fito',
    position: 'Frontend Developer',
    avatar: 'avatars/nazarii_fito_logo.png',
  },
];

const Body = () => {
  return (
    <main style={styles.body}>
      {users &&
        users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            position={user.position}
            avatar={user.avatar}
          />
        ))}
    </main>
  );
};

const styles = {
  body: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default Body;
