const prod = {
    url: {
        API_URL: `https://adventure-inventory-api.onrender.com`
    }
};
const dev = {
    url: {
        API_URL: `http://localhost:8000`
    }
};

export const config = process.env.NODE_ENV === `development` ? dev : prod;