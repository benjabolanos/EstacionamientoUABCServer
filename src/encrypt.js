import jwt from 'jsonwebtoken';

const secret = 'a8vf3uG0U6doHmv620Uh5czl32jaY058';

export const create_token = (value) => {
    let data = {
        number_id: value
    };
    const token = jwt.sign(data, secret);
    console.log('token:', token);
    return token;
}