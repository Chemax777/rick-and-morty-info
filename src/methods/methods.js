export async function getData(url) {
    const req = await fetch(url)
    return await req.json()
}

