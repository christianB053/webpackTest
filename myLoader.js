module.exports = function myLoader(item) {
  console.log("hello loader!");

  return item.replace("console.log(", "alert(");
};
//  item은 우리가 로더로 처리할 파일
