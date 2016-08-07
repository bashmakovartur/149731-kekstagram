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
    if (b instanceof Array) {
      var artifactsSquare = 0;
      for (x = 0; x < a.length; x++) {
        artifactsSquare += a[x] * b [x];
      }
      return 'Общая площадь артефактов сжатия: ' + artifactsSquare + ' пикселей';
    }
    var amountOfRedPoints = 0;
    for (var i = 0; i < a.length; i++) {
      amountOfRedPoints += a[i];
    }
    return 'Количество красных точек во всех строчках изображения: ' + amountOfRedPoints;
  }
}
