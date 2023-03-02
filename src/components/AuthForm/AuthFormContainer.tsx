import React, { useState } from 'react';

import AuthForm from './AuthForm';

export const AuthFormContainer = () => {
  const [isCheckedRememberMe, setIsCheckedRememberMe] = useState(false);
  const onChangeRememberMe = () => {
    setIsCheckedRememberMe(!isCheckedRememberMe);
  };

  return <AuthForm isCheckedRememberMe={isCheckedRememberMe} onChangeRememberMe={onChangeRememberMe} />;
};
