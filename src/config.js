const prod = {
    url: {
        API_URL: `https://adventure-inventory-api-production.up.railway.app/`
    }
};
const dev = {
    url: {
        API_URL: `http://localhost:8000`
    }
};

export const config = process.env.NODE_ENV === `development` ? dev : prod;