const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  return await res.json();
};

async function getResource(url) {
  try {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  } catch (e) {
    console.log("Json-Server is offline");
  }
}

export { postData };
export { getResource };
