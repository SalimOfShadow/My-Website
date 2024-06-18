import { useNavigate } from "react-router-dom";

async function verifyUser(id, token) {
  try {
    const response = await fetch(
      `http://localhost:3001/user-verification/${id}/${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        credentials: "include",
      }
    );

    if (response.ok) {
      const data = await response.json();
      const message = data.message;
      console.log(message);
      return true;
    } else {
      const data = await response.json();
      const message = data.message;
      console.log(message);
      return false;
    }
  } catch (error) {
    console.error("Error: ", error);
    return false;
  }
}
export { verifyUser };
