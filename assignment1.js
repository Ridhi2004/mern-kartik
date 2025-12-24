const users = [
  { id: 1, name: "Rabin", age: 25, role: "admin", active: true },
  { id: 2, name: "Sita", age: 22, role: "user", active: false },
  { id: 3, name: "Hari", age: 30, role: "user", active: true },
  { id: 4, name: "Gita", age: 28, role: "moderator", active: true },
  { id: 5, name: "Ram", age: 20, role: "user", active: false }
];
// Get all user names as an array.
const names=users.map(user=>user.name);
console.log(names);

// Find the user whose id is 3.
const userID3=users.find(user=>user.id===3);
console.log(userID3);

// Get all users with role "user".
const roleuser=users.filter(user=>user.role==="user");
console.log(roleuser);

// Check if at least one user is inactive.
const userInactive=users.some(user=> !user.active);
console.log(userInactive);

// Count how many users are active.
const countActive=users.filter(user=>user.active===true).length
console.log(countActive);

// Get an array of users older than 25.
const older25=users.filter(user=>user.age > 25);
console.log(older25);

// Create a new array where each user has an extra field isAdult (true if age ≥ 18).
const usersWithAdult = users.map(user => ({
  ...user,
  isAdult: user.age >= 18
}));
console.log(usersWithAdult);


// Sort users by age in ascending order.
const sortedByAge=[...users].sort((a,b)=>a.age-b.age);
console.log(sortedByAge);

// Remove the user whose id is 2.
const withoutId2 = users.filter(user => user.id !== 2);
console.log(withoutId2);
// Get only the names of active users.
const activeUser=users.filter(user=>user.active).map(user=>user.name);
console.log(activeUser);
// Group users by their role.
const groupedByRole = users.reduce((acc, user) => {
  acc[user.role] = acc[user.role] || [];
  acc[user.role].push(user);
  return acc;
}, {});
console.log(groupedByRole);

// Find the average age of all users.
const avgAge =
  users.reduce((sum, user) => sum + user.age, 0) / users.length;
  console.log(avgAge);
// Get the first inactive user.
const firstInactive = users.find(user => !user.active);
console.log(firstInactive);
// Convert the array into an object where keys are id and values are user objects.
const usersById = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});
console.log(usersById);
// Check if all admins are active.
const allAdminsActive = users
  .filter(user => user.role === "admin")
  .every(user => user.active);
console.log(allAdminsActive);
