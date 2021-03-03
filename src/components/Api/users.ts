export function getList() {
  return fetch(
    "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
  ).then((data) => data.json());
}
