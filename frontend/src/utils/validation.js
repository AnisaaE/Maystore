export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePassword = (password) => {
    return password.length >= 5;
  };
  
  export const validateMatchingPasswords = (password, repeatPassword) => {
    return password === repeatPassword;
  };
  
  export const validateUsername = (username) => {
    return username.length >= 3;
  };

  export const validatePhoneNumber = (phone) => {
    const phonePattern = /^(?:\+359|0)?\d{9}$/;
    return phonePattern.test(phone);
  };
  
  export const validateName = (name) => {
    return name.length > 1;
  };
  
  export const validateCity = (selectedCity, cities) => {
    return cities.some(city => city.name === selectedCity.name);
  };
  
  export const validateOffice = (selectedOffice, offices) => {
    return offices.some(office => office.name === selectedOffice.name);
  };
  