export async function resCheck(res) {
  let result = await res.json();

  if (res.ok) {
    return result;
  } else {
    throw result;
  }
}
