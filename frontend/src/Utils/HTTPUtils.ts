import { toaster } from 'evergreen-ui';

export const toastHTTPErrors = (
  errors: { [field: string]: string[] },
  timeout: number = 200
) => {
  Object.values(errors)
    .flat()
    .forEach((error) => setTimeout(() => toaster.danger(error), timeout));
};
