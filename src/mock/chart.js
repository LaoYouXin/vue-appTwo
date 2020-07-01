import Mock from 'mockjs'
 
export default [
  {
    url: '/login',
    type: 'post',
    response: _ => {
      return {
        code: 200,
        text:"登陆成功"
      }
    }
  },
]