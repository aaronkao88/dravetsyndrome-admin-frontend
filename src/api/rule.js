import axios from 'axios'

// 取得規章資料
axios.get('http://localhost:1337/rule')
  .catch(function (error) {
    console.log(error);
});

// 新增規章資料
axios.post('http://localhost:1337/rule')
.catch(function (error) {
  console.log(error);
});

// 更新規章資料
axios.put('http://localhost:1337/rule')
.catch(function (error) {
  console.log(error);
});

// 刪除規章資料
axios.delete('http://localhost:1337/rule')
.catch(function (error) {
  console.log(error);
});