$(document).ready(function () {
  var e = ace.edit('code')
  e.getSession().setMode('ace/mode/html')
  e.setTheme('ace/theme/xcode')
  e.setValue(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<img src="./image/girl.jpg">
</body>
</html>
  `)
  $('#btn').on('click', function () {
    $('#output').html(e.getValue())
  })
})
