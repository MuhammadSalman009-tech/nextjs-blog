import Link from "next/link";
import axios from "axios";
import styles from "../../styles/users.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
};

function Users({ users }) {
  return (
    <div className="container">
      <h1>itfieriens</h1>
      {users.map((user) => (
        <div className="card mt-2" key={user.id}>
          <Link href={`/itfieriens/${user.id}`}>
            <a className={styles.listItem}>{user.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Users;
