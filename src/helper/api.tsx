export const api = async (url: string) => {
  const { REACT_APP_ACCESS_KEY, REACT_APP_BASE_URL } = process.env;

  try {
    const response = await fetch(
      `${REACT_APP_BASE_URL}/${url}?${REACT_APP_ACCESS_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
