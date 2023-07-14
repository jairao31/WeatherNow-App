export const getBaseUrl = () => {
    return `${process.env.REACT_APP_SERVER_IP}`;
};

console.log("process.env.REACT_APP_SERVER_IP", process.env.REACT_APP_SERVER_IP);
