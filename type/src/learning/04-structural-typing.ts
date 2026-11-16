/*eslint-disable*/

// Restrictions are worth more than identity
type User = {
    username: string;
    password: string;
};

type ValidateUser = (user: User, received: User) => boolean;

const validate: ValidateUser = (user, received) => {
    return user.username === received.username && user.password === received.password;
};

const dbUser: User = { username: 'ronaldo', password: '12353' };
const receivedUser: User = { username: 'ronaldo', password: '123'};
//const receivedUser: User = { username: 'ronaldo', password: '123', token: 'token' };
//                                                                   └ E.g: The token prop is not at User, but the code would run anyway
const loggedIn = validate(dbUser, receivedUser);

console.log(loggedIn);
