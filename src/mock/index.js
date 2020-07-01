import Mock, { Random } from "mockjs";



// var data = Mock.mock({   //返回一个json对象
//     'uname|1':'fei',
//     'upwd|1':"1234",
//   })
// Mock.mock('/login',data)

const data = function (){
  let number=[]
  for(let i=0;i<4;i++){
    let obj={
      uname:Random.integer(1,10),
      upwd:Random.integer(1,10)
    }
  }
  number.push(obj)
  return number
}

Mock.mock('/login','post',data);
