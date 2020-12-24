import { useEffect } from 'react';

export const List = ({ langs }) => {
  useEffect(() => {
    console.log('Listjs:useEffect');

    return () => {
      console.log('Listjs:useEffect:unmount');
    };
  });

  return (
    <div>
      {langs.map((lang, index) => {
        return <div key={index}>{lang}</div>;
      })}
    </div>
  );
};
