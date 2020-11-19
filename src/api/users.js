const BASE_URL = "https://raw.githubusercontent.com/oivannikov/tower-task/api/api/users.json";

export async function getUsers() {
  const response = await fetch(`${BASE_URL}`);
  const result = await response.json();
  const users = await result.users;

  return users;
}
