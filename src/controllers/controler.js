const axios = require('axios');




const post = async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/orgs/takenet/repos', {
      params: {
        type: 'all'
      }
    });


    const repos = response.data;
    const filteredRepos = repos.filter(repo => repo.language === 'C#').sort((a, b) => new Date(a.created_at) - new Date(b.created_at)) // Ordena pela data de criação
    .slice(0, 5);
    res.json(filteredRepos);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}




  module.exports = {post};