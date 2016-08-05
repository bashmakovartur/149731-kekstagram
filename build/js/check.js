function getMessage(a, b) {
  if (typeof a == 'boolean') {
    if (a) {
      return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
    } else {
      return 'Переданное GIF-изображение не анимировано';
    }
  } else if (typeof a == 'number') {
    return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + b * 4 + ' атрибутов';
  } else if (a instanceof Array) {
    var amountOfRedPoints;
    for (var i = 0; i < a.length; i++) {
      amountOfRedPoints = a[i];
    }
    return 'Количество красных точек во всех строчках изображения: ' + amountOfRedPoints;
  } else if ( a && b instanceof Array) {
    return '111';
  }
}
