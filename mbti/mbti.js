document.getElementById('mbtiForm').addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止表单默认提交行为

  // 验证用户是否回答了所有问题
  var questions = ['q1', 'q2', 'q3', 'q4']; // 假设有四个问题
  var isComplete = questions.every(function(question) {
    var inputs = document.getElementsByName(question);
    return Array.from(inputs).some(function(input) {
      return input.checked;
    });
  });

  if (!isComplete) {
    alert('请确保你回答了所有问题！');
    return; // 如果未回答所有问题，则不执行后续代码
  }

  // 获取用户答案并计算MBTI类型
  var answers = {};
  var mbtiType = '';
  questions.forEach(function(question) {
    var inputs = document.getElementsByName(question);
    var checkedInput = Array.from(inputs).find(function(input) {
      return input.checked;
    });
    if (checkedInput) {
      answers[question] = checkedInput.value;
      mbtiType += answers[question];
    } else {
      alert('请为每个问题选择一个答案！');
      return false; // 如果某个问题未选择答案，则中断执行
    }
  });

  if (!mbtiType) {
    return; // 如果未收集到有效的MBTI类型，则不执行后续代码
  }

  // 弹窗显示结果和图片
  var resultWindow = window.open("", "_blank", "width=400,height=400");
  resultWindow.document.write("<h1>你的MBTI类型是：" + mbtiType + "</h1>");
  resultWindow.document.write("<p>点击以下链接了解更多关于你的性格类型：</p>");
  var imagePath = 'img/mbti_' + mbtiType.toLowerCase() + '.png'; // 假设图片是小写
  resultWindow.document.write("<img src='" + imagePath + "' alt='MBTI Type Image' style='width:100%;max-width:500px;height:auto;'>");
  resultWindow.document.write("<a href='https://baike.baidu.com/item/%E8%BF%88%E5%B0%94%E6%96%AF%E5%B8%83%E9%87%8C%E6%A0%BC%E6%96%AF%E7%B1%BB%E5%9E%8B%E6%8C%87%E6%A0%87/854525?fr=ge_ala" + mbtiType + "'>了解更多</a>");
  resultWindow.focus();
});
