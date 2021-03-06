import { apiUrl } from '~/config';
import Request from '~/core/Request';

export function register (data) {
	Request.post(`${apiUrl}/cook/user/register`, data);
}

export function getCookInfo (Id) {
	Request.get(`${apiUrl}/cooks/${Id}`);
}
