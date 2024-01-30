export async function onRequest(context) {
  const resp = await fetch(context.env.API_HOST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': context.env.API_AUTH
    },
    body: context.request.body
  });
  return new Response("Hi there!");
}
