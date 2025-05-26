import bcrypt from 'bcrypt';

export const generateMockUsers = async (count = 1) => {
  const users = [];
  const hashedPassword = await bcrypt.hash('coder123', 10);
  for (let i = 0; i < count; i++) {
    users.push({
      first_name: `User${i}`,
      last_name: `Test${i}`,
      email: `user${i}@mail.com`,
      password: hashedPassword,
      role: Math.random() > 0.5 ? 'user' : 'admin',
      pets: []
    });
  }
  return users;
};