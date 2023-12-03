
async function fetchQuestionSetsByUser(uuid) {
  const response = await fetch(`https://example.com/api/users/${uuid}/question_sets`);
  const data = await response.json();
  return data.question_sets;
}
