import { useSession } from "@supabase/auth-helpers-react";

const AuthProvider = ({ children }) => {
  const session = useSession();

  return session ? children : <p>Залогінся спершу</p>;
};

export default AuthProvider;
