const prod = {
    url: {
        API_URL: `https://adventure-inventory-api.railway.internal`
    }
};
const dev = {
    url: {
        API_URL: `http://localhost:8000`
    }
};

export const config = process.env.NODE_ENV === `development` ? dev : prod;