async function doGet(url) {
	const res = await fetch(url);
	return await res.json();
}

async function doPost(url, data) {
	const res = await fetch(url, {
		method: "POST",
		body: JSON.stringify(data),
		headers: { "content-type": "application/json" },
	});
	return await res.json();
}

async function doPatch(url, id, data) {
	url = `${url}/${id}`;

	const res = await fetch(url, {
		method: "PATCH",
		body: JSON.stringify(data),
		headers: { "content-type": "application/json" },
	});
	return await res.json();
}

async function doDelete(url, id) {
	url = `${url}/${id}`;

	const res = await fetch(url, { method: "DELETE" });
	return await res.json();
}

module.exports({
	doGet: doGet,
	doPatch: doPost,
	doPatch: doPatch,
	doDelete: doDelete,
});
