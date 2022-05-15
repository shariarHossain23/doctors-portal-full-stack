import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [isLoading,setLoading] = useState(true)
  useEffect(() => {
    const email = user?.email;
    if (email) {
        fetch(`http://localhost:5000/admin/${email}`, {
          method: "GET",
          headers: {
            "authorization": `Bearer ${localStorage.getItem("userToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setAdmin(data.admin);
            setLoading(false)
          });
      
    }
  }, [user]);
  return [admin,isLoading];
};
export default useAdmin;
