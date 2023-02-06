import React from 'react';

const PersonalError = ({children}) => {
  return (
    <div className="text-danger">
        {children}
    </div>
  );
}

export default PersonalError;

