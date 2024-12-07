import { users } from "./users";
export const getReportNumber = () => Date.now();

export const getReportDate = () => {
  const now = new Date();
  const formattedDate = now.toISOString().slice(0, 10);
  return formattedDate;
};

export function isValidUser(username, password) {
  // Use the `find` method to search for a matching user
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  // Return true if a matching user is found, otherwise false
  return user ? true : false;
}
