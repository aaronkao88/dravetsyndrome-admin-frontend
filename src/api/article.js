import axios from 'axios'

// 取得文章列表
axios.get('http://localhost:1337/article')
  .catch(function (error) {
    console.log(error);
});

// 新增新的文章
axios.post('http://localhost:1337/article')
.catch(function (error) {
  console.log(error);
});

// 更新文章
axios.put('http://localhost:1337/article')
.catch(function (error) {
  console.log(error);
});

// 刪除文章
axios.delete('http://localhost:1337/article')
.catch(function (error) {
  console.log(error);
});