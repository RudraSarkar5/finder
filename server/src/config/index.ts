import dotenv from "dotenv";

dotenv.config();

const env_variable = {
    PORT : process.env.PORT
}

export {
    env_variable,
}