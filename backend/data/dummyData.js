import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Gopal',
        email: 'gopal@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Ashwini',
        email: 'ashwini@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
];

const complaints = [
    {
        title: 'Bug in payment gateway',
        description: 'Payment gateway throws an error during transaction',
        status: 'In Progress',
        priority: 'Medium',
        // user: 'will be dynamically assigned'
    },
    {
        title: 'Unable to login',
        description: 'User is unable to login with correct credentials',
        status: 'Pending',
        priority: 'High',
        // user: 'will be dynamically assigned'
    },
    {
        title: 'Page not found error',
        description: '404 error on accessing certain pages',
        status: 'Resolved',
        priority: 'Low',
        // user: 'will be dynamically assigned'
    },
];

export { users, complaints };
