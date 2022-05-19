var outer = function () {
  var a = 1;
  // 외부에서 접근할 수 없는 폐쇄된 공간
  // 비공개 프로퍼티

  var inner = function () {
    var b = 6;
    var c = 7;
    a = a + b + c;
    console.log(a);
  };
  //inner();
  return inner;
};
