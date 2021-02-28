import { toaster } from 'evergreen-ui';
import { RegisterOptions } from 'react-hook-form';
import { IRegisterCredentials } from '../Pages/Register/types';

export const toastValidationErrors = (
  errors: { message: string }[],
  timeout = 200
): void => {
  Object.values(errors)
    .reverse()
    .map((error) => error.message)
    .forEach((message) =>
      setTimeout(() => toaster.danger(message, { id: message }), timeout)
    );
};

export const emailValidation = (): RegisterOptions => ({
  required: 'E-mail is required.',
  pattern: {
    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: 'E-mail is not valid.',
  },
});

export const passwordValidation = (): RegisterOptions => ({
  required: 'Password is required.',
});

export const confirmPasswordValidation = ({
  password1,
  password2,
}: Partial<IRegisterCredentials>): RegisterOptions => ({
  ...passwordValidation(),
  validate: () => password1 === password2 || 'Passwords do not match',
});
