import axios from "axios";

const endpoint = "https://scales2care-backend.herokuapp.com/api";

export async function addUser({ dni }) {
  try {
    const response = await axios.post(`${endpoint}/user`, { dni });
    if (response.status === 200) {
      return response.data.data.id;
    }
  } catch (error) {
    return "";
  }
}

export async function addResult({ dni, name, sphere, total }) {
  try {
    const response = await axios.post(`${endpoint}/scalesResults`, {
      user_id: dni,
      name,
      sphere,
      total,
    });

    if (response.status === 200) {
      console.log("result added");
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
