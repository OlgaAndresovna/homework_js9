/* 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
*/
document.querySelector('#from').addEventListener('input', event => {
    document.querySelector('span').innerHTML = event.target.value;
});

/* 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
1) добавить два класса: animate_animated и animate_fadeInLeftBig
2) поставить данному элементу стиль visibility в значение 'visible'.
*/
document.querySelector('.messageBtn').addEventListener('click', () => {
    document.querySelector('.message').classList.add('animate__animated', 'animate__fadeInLeftBig');
    document.querySelector('.message').style.visibility = 'visible';
});

/* 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям).
Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
Если поле было чем-либо заполнено, подсветку (класс error)необходимо убрать.
*/