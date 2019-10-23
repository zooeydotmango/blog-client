import marked from 'marked'
import blog from '@/api/blog'

export default {
  name: 'detail',
  data() {
    return {
      title: '',
      rawContent: '',
      user: {},
      createdAt: '',
    }
  },
  created() {
    this.blogId = this.$route.params.blogId;
    blog.getDetail({blogId: this.blogId})
      .then(res => {
        this.title = res.data.title;
        this.user = res.data.user;
        this.rawContent = res.data.content;
        this.createdAt = res.data.createdAt
      })
  }
  ,
  computed: {
    markdown() {
      return marked(this.rawContent)
    }
  }
}
