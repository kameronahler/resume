import { TypeContentfulPosts } from '../store/Types'

const useFilterPostsByTag = (posts: TypeContentfulPosts, targetTag: string) => {
  const filteredDown = posts.filter(post => {
    const filteredTags = post.metadata.tags.filter(
      tag => tag.sys.id === targetTag
    )

    if (filteredTags.length) {
      return post
    }
  })

  return filteredDown
}

export default useFilterPostsByTag
