import blog from '@/api/blog'

export default {
  name: 'create',
  data () {
    return {
      title:'',
      description:'',
      content:'',
      atIndex: false,
      blogId: null
    }
  },
  created(){
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId:this.blogId})
      .then(res=>{
        this.title = res.data.title
        this.description = res.data.description
        this.content = res.data.content
        this.atIndex=res.atIndex
      })
  },
  methods:{
    onEdit(){
      blog.updateBlog({blogId:this.blogId},{title:this.title,description:this.description,content:this.content,atIndex:this.atIndex})
        .then(res=>{
          this.$message.success(res.msg)
          this.$router.push({path:`/detail/${res.data.id}`})
        })
    }
  }
}
