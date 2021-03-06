import axios from 'axios'

// 取得醫院資料
axios.get('http://localhost:1337/hospital')
  .catch(function (error) {
    console.log(error);
});

// 新增醫院資料
axios.post('http://localhost:1337/hospital')
.catch(function (error) {
  console.log(error);
});

// 更新醫院資料
axios.put('http://localhost:1337/hospital')
.catch(function (error) {
  console.log(error);
});

// 刪除醫院資料
axios.delete('http://localhost:1337/hospital')
.catch(function (error) {
  console.log(error);
});