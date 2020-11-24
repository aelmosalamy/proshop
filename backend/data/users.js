import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('admin'),
    isAdmin: true,
  },
  {
    name: 'Adham Elmosalamy',
    email: 'adham@example.com',
    password: bcrypt.hashSync('1234'),
  },
  {
    name: 'Zyad Elmosalamy',
    email: 'zyad@example.com',
    password: bcrypt.hashSync('1234'),
  },
]

export default users
