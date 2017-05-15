module.exports = function main(email, suffixes) {
  // Write your code here
  return suffixes.includes(email.split('@')[1]);
};
