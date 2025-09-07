import axios from 'axios';

const login = async () => {
  try {
    // Step 1: Get JWT Token by sending credentials
    const response = await axios.post("http://192.168.1.100:8000/api/token/", {
      username: "nazeef",
      password: "yourpassword", // 🔐 Replace this with the actual password
    });

    const token = response.data.access;
    console.log("✅ JWT Token:", token);

    // Step 2: Use token to access protected endpoint
    const protectedData = await axios.get("http://192.168.1.100:8000/api/products/", {
      headers: {
        Authorization: `Bearer ${token}`, // 🔒 JWT used here
      },
    });

    console.log("🔐 Protected Data:", protectedData.data);
  } catch (error) {
    console.error("❌ Error occurred:", error.response?.data || error.message);
  }
};

export default login;
