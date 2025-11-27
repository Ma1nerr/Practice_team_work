import UserCard from './User/UserCard';

const users = [
  {
    id: 1,
    name: 'Semenyshyn Artur',
    position: 'Junior designer',
    avatar: 'avatars//Semenyshyn.png',
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
