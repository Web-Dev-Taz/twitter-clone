export default async function handler(req, res) {
  if (req.method !== 'POST') return res.end()

  if (req.body.task === 'clean_database') {
  }

  if (req.body.task === 'generate_users_and_tweets') {
  }

  if (req.body.task === 'generate_one_tweet') {
  }

  res.end()
}