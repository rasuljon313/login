// src/utils/api.js
export const API_BASE_URL = "https://realauto.limsa.uz/api";


// Helper function to make API requests
const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const getCategories = (token) => {
  return fetchData(`${API_BASE_URL}/categories`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createCategory = (token, formData) => {
  return fetchData(`${API_BASE_URL}/categories`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
};

export const updateCategory = (token, id, formData) => {
  return fetchData(`${API_BASE_URL}/categories/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
};

export const deleteCategory = (token, id) => {
  return fetchData(`${API_BASE_URL}/categories/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
