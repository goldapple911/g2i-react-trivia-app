import { MESSAGES } from '../utils/constants';

const fetchWithErrorHandler = async (URL: string) => {
  const response: Response = await fetch(URL);
  if (!response.ok) {
    switch (response.status) {
      case 401:
        throw new Error(MESSAGES.ERRORS.API_RESPONSE_ERROR_HANDLER[401]);
      case 403:
        throw new Error(MESSAGES.ERRORS.API_RESPONSE_ERROR_HANDLER[403]);
      case 404:
        throw new Error(MESSAGES.ERRORS.API_RESPONSE_ERROR_HANDLER[404]);
      case 500:
        throw new Error(MESSAGES.ERRORS.API_RESPONSE_ERROR_HANDLER[500]);
      case 503:
        throw new Error(MESSAGES.ERRORS.API_RESPONSE_ERROR_HANDLER[503]);
      default:
        throw new Error(MESSAGES.ERRORS.API_RESPONSE_ERROR_HANDLER.UNKNOWN);
    }
  }

  return response;
};

export default fetchWithErrorHandler;
