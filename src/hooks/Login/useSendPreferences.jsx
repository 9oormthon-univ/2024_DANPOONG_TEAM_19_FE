import { useState } from "react";
import { axiosInstance } from "../../axios/axios_instance"; // Import axios instance

const useSendPreferences = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendPreferences = async (categoryIds) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axiosInstance.post("/api/core/user/prefer", {
        categoryIds,
      });
      if (response.status === 200) {
        setSuccess(true);
        console.log("Preferences sent successfully:", response.data);
      }
    } catch (err) {
      setError(err);
      console.error("Error sending preferences:", err);
    } finally {
      setLoading(false);
    }
  };

  return { sendPreferences, loading, error, success };
};

export default useSendPreferences;
