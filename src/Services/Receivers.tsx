import { AUTH_API } from './Url';

export async function getReceiverDetails(userId: string) {
  try {
    const response = await fetch(`${AUTH_API}/v1/receivers/listAll=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateReceiverDetails(id: string | null, receiverData: any) {
  try {
    const response = await fetch(`${AUTH_API}/v1/receivers/update?id=${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(receiverData),
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
