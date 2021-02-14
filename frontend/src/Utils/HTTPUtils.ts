import { toaster } from 'evergreen-ui';

const toastHTTPErrors = (
  errors: { [field: string]: string[] },
  timeout = 200
): void => {
  Object.values(errors)
    .flat()
    .forEach((error) => setTimeout(() => toaster.danger(error), timeout));
};

export default toastHTTPErrors;
