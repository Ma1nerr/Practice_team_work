import UserCard from './User/UserCard';

const users = [
  {
    id: 0,
    name: 'Nazarii Fito',
    position: 'Frontend Developer',
    avatar: 'avatars/nazarii_fito_logo.png',
  },
  {
    id: 1,
    name: 'Nazar Sokolskyi',
    position: 'Software Enginer',
    avatar: 'avatars//avatar-default.png',
  },
  {
    id: 2,
    name: 'Semenyshyn Artur',
    position: 'Junior designer',
    avatar: 'avatars//Semenyshyn.jpg',
  },
  {
    id: 3,
    name: 'Ivanna Kutryk',
    position: 'Backend Developer',
    avatar: 'avatars//ivanka_kutryk_2.png',
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
