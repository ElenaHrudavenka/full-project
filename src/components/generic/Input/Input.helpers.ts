// The password must contain 8 characters, one upper case, one lower case, one special character, one number.
// Else return false.
export const checkInputPassword = (password: string) => {
  const passwordRegExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
  return passwordRegExp.test(password);
};
