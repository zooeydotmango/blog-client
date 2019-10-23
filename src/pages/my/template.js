import blog from '@/api/blog'
import {mapGetters} from 'vuex'

export default {
  name: 'user',
  data() {
    return {
      blogs: [],
      page: 1,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.page = this.$route.query.page || 1;
    console.log(this.$route.query.page);
    blog.getBlogsByUserId(this.user.id)
      .then(res => {
        console.log(res);
        this.page = res.page;
        this.total = res.total;
        this.blogs = res.data;

      })
  },
  methods: {
    splitDate(dataStr) {
      let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    },
    onPageChange(newPage) {
      blog.getBlogsByUserId(this.user.id, {page: newPage})
        .then(res => {
          this.blogs = res.data;
          this.total = res.total
          this.page = res.page
          this.$router
            .push({path: `/my/`, query: {page: newPage}})

        })
    },
    onDelete(blogId) {

      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return blog.deleteBlog({blogId})
      }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.blogs = this.blogs.filter(blog => blog.id != blogId)
        }
      ).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}

