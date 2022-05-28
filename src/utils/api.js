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

export async function addResult({ dni, name, sphere, total, interpretation }) {
  try {
    const response = await axios.post(`${endpoint}/scalesResults`, {
      user_id: dni,
      name,
      sphere,
      total,
      interpretation,
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

export async function getResults({ dni }) {
  try {
    const response = await axios.get(`${endpoint}/scalesResults/${dni}`);
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    return false;
  }
}
