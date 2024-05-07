import axios from "axios";

const API_BASE_URL = "https://newsapi.org/v2";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const searchPosts = async (query) => {
  try {
    const response = await api.get("/everything", {
      params: {
        q: query,
        apiKey: "c323baa9c5dc4f618080594602061756",
      },
    });
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error searching posts:", error);
    throw error;
  }
};
