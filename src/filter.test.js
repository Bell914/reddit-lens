import { describe, expect, it } from 'vitest';
import { filterPosts } from './filter';

const posts = [
  { title: 'Best pasta recipes', subreddit: 'food' },
  { title: 'A guide to hooks', subreddit: 'reactjs' },
];

describe('filterPosts', () => {
  it('returns every post for an empty query', () => {
    expect(filterPosts(posts, '')).toEqual(posts);
  });

  it('matches titles and subreddit names case-insensitively', () => {
    expect(filterPosts(posts, 'REACT')).toEqual([posts[1]]);
    expect(filterPosts(posts, 'pasta')).toEqual([posts[0]]);
  });
});
