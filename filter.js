export function filterPosts(posts, query = '') {
  const needle = query.trim().toLowerCase();
  if (!needle) return posts;
  return posts.filter(post => `${post.title} ${post.subreddit}`.toLowerCase().includes(needle));
}
