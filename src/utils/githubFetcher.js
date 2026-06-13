// githubFetcher.js

export const fetchPostFromGitHub = async (lectureId) => {
  const owner = "heyRahull"; 
  const repo = "rahul_blog_posts";
  
  // MAGIC: The code assumes the filename IS the ID + .md
  // This works IF you ensure the file in GitHub is named exactly like the ID
  const filename = `${lectureId}.md`; 
  
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filename}`;
  
  // Add GitHub token for authentication (required to avoid rate limiting)
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  const headers = {
    'Accept': 'application/vnd.github.v3.raw'
  };
  
  if (token) {
    headers['Authorization'] = `token ${token}`;
  }
  
  const response = await fetch(url, { headers });

  if (!response.ok) {
    return "# Content Coming Soon\nPlease check if the file exists on GitHub with the correct ID.";
  }
  
  return await response.text();
};