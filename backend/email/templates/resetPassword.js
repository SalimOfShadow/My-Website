const generateResetEmail = (recipient, url) => {
  return `<h1>This is your password reset link, ${recipient.username}</h1><a href="${url}">Click here!</a>`;
};
module.exports = generateResetEmail;
