// var x = 0;

// function addInput() {
// 	if (x < 10) {
//     var str = '<input type="file" accept="image/png, image/jpeg, image/jpg" name="photo_manual_'+(x + 1)+'"> <textarea type="text" placeholder="введите рецепт" name="manual_'+(x + 1)+'" class="recipe"></textarea><div id="input' + (x + 1) + '"></div>';
//     document.getElementsByClassName('#input' + x).innerHTML = str;
//     x++;
//   } else
//   {
//   	alert('Максимум 10 шагов!');
//   }
// }

var x = 0;

function addInput() {
	if (x < 10) {
    var str = '<p>Шаг'+(x + 1)+'</p> <p>Фото</p> <input type="file" accept="image/png, image/jpeg, image/jpg" name="photo_manual_step'+(x+1)+'"> <textarea type="text" placeholder="введите шаг рецепта" name="manual_'+(x+1)+'"class="recipe"></textarea> <div id="input'+(x+1)+'"></div>';
    document.getElementById('input' + x).innerHTML = str;
    x++;
  } else
  {
  	alert('Больше 10 шагов добавить нельзя!');
  }
}