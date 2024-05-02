import Header from "./Header";

const UserInfo = ({name, password}) => {
  return (
    <div>
      <Header text={`Hello ${name}`}></Header>
      <p>Password: {password}</p>
    </div>
  )
}

export default UserInfo;