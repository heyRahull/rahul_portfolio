export const fetchHashnodePost = async (slug) => {
  const RSS_URL = 'https://rahulagarwal.hashnode.dev/rss.xml';
  
  try {
    // 1. Fetch the RSS XML via the proxy
    const response = await fetch(`https://corsproxy.io/?${RSS_URL}`);
    const str = await response.text();
    
    // 2. Parse the XML string into a DOM object
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(str, "text/xml");
    const items = xmlDoc.querySelectorAll("item");
    
    // 3. Find the post that matches your slug
    let targetPost = null;
    items.forEach(item => {
      const link = item.querySelector("link")?.textContent;
      if (link && link.includes(slug)) {
        targetPost = {
          title: item.querySelector("title")?.textContent,
          content: {
            // Note: RSS content:encoded contains the HTML
            markdown: item.getElementsByTagName("content:encoded")[0]?.textContent || ""
          }
        };
      }
    });

    return targetPost;
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return null;
  }
};