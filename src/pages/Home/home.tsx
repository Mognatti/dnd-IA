import { UserContext } from "../../context/userContext";
import { useContext } from "react";

export default function Home() {
  const user = useContext(UserContext);

  return (
    <div>
      <h4>Bem vindo, {user?.displayName} </h4>
    </div>
  );
}
