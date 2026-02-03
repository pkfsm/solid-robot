export default function Nimda() {
  const key = prompt("Admin key");

  const create = () =>
    fetch("/api/nimda/lecture", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": key
      },
      body: JSON.stringify({ title: "New Lecture" })
    });

  return <button onClick={create}>Add Lecture</button>;
}
