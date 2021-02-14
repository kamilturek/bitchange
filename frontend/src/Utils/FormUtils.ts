import { toaster } from 'evergreen-ui';

export const toastErrors = (
  errors: { message: string }[],
  timeout: number = 200
): void => {
  Object.values(errors)
    .reverse()
    .map((error) => error.message)
    .forEach((message) =>
      setTimeout(() => toaster.danger(message, { id: message }), timeout)
    );
};

export const emailValidation = () => ({
  required: 'E-mail is required.',
  pattern: {
    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: 'E-mail is not valid.',
  },
});

export const passwordValidation = () => ({
  required: 'Password is required.',
});

export const confirmPasswordValidation = ({
  password1,
  password2,
}: {
  [x: string]: string;
}) => {
  return {
    ...passwordValidation(),
    validate: () => password1 === password2 || 'Passwords do not match',
  };
};
