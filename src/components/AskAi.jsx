import React, { useEffect } from "react";
import axios from "axios";
const AskAi = () => {
  useEffect(() => {
    handleSubmit();
  }, []);
  const handleSubmit = async () => {
    console.log(`${import.meta.env.VITE_BACKEND_URL}/api/ask-ai`);
    const URL = `${import.meta.env.VITE_BACKEND_URL}/api/ask-ai`;
    try {
      const respone = await axios.post(URL);
      if (respone.data.success) {
        console.log("success");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return <div>AskAi</div>;
};

export default AskAi;
