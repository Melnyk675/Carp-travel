
export const PhoneNumber = (phoneNumber: string): string => {
    
    const numeric = phoneNumber.replace(/\D/g, "");
    const country = numeric.slice(0, 2);
    const operator = numeric.slice(2, 5);
    const rest = numeric.slice(5);
  
    return `+${country} (${operator}) ${rest.slice(
      0,2
    )} ${rest.slice(2, 4)} ${rest.slice(4)}`;
  };