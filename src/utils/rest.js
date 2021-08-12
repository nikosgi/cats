



export async function CatService({ api, method = 'GET', body}) {
  

	const endpoint = 'https://api.thecatapi.com/v1';
	let params = {
		method,
		headers: {
			'x-api-key' : 'c37818ed-7de1-4715-aad1-5746fd50a5f8'
		}
	}

	if (method === 'POST' && body ){
		params.body =  JSON.stringify(body);
		params['headers']['Content-Type'] = 'application/json'
	}

  return fetch(endpoint + api,params)
}
