export const LANGUAGE = ['Javascript', 'C++', 'Ruby', 'Java', 'PHP', 'Go'];

export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGE);
    }, 1000);
  });
};
