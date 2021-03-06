import axios from 'axios'

// 取得成員資料
axios.get('http://localhost:1337/team')
  .catch(function (error) {
    console.log(error);
});

// 新增成員資料
axios.post('http://localhost:1337/team')
.catch(function (error) {
  console.log(error);
});

// 更新成員資料
axios.put('http://localhost:1337/team')
.catch(function (error) {
  console.log(error);
});

// 刪除成員資料
axios.delete('http://localhost:1337/team')
.catch(function (error) {
  console.log(error);
});