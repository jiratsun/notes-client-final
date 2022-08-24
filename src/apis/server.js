import axios from "axios";

const server = axios.create({
    baseURL: "https://notes-server-final-guest.as.r.appspot.com",
});

export default server;
