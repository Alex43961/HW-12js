//Задание
//Создать программу, которая с помощью alert поздоровается с пользователем, а затем, с помощью prompt предложит выбрать один из пунктов:

//a) Зарегистрироваться
//b) Авторизироваться
//c) Просмотреть список всех пользователей
//d) Изменить данные пользователя
//q) Выйти
//При вводе любого отличного от данных символа, с помощью alert должно выводиться сообщение о том, что нужно выбрать только один из данных пунктов, после чего приглашение о выборе должно появиться снова.

//Регистрация:
//При выборе пункта "Регистрация", пользователю должны начать поступать одно за другим предложения ввода данных с помощью prompt, а именно: имя, фамилия, возраст, email и пароль. После этого должен создаться новый объект, в свойства которого будут записаны введённые пользователем данные. Список пользователей, представленный массивом, должен пополниться новым пользователем. После всего этого в консоль должно вывестись сообщение о том, что новый пользователь был добавлен, а также названы его имя и фамилия.

//После данной операции пользователю должно поступить предложение, с помощью confirm, продолжить манипуляции (выбрать очередной пункт из списка приглашения). Если ответ положительный, то всё начинается заново, а если отрицательный - программа прощается с пользователем и завершает своё выполнение.

//Авторизация:
//При выборе пункта "Авторизация", пользователю по очереди должны поступить предложения ввести email и пароль. После этого необходимо проверить всех пользователей на совпадение email с тем, который был только что введён. Если совпадение найдено, дополнительно должен провериться пароль, в противном случае, пользователю должно выпасть сообщение в консоль о том, что пользователя с предоставленными данными не было найдено. В случае же успеха (совпадение и email, и пароль) должно выдать сообщение в консоль о том, что пользователь был успешно авторизирован, после чего выводятся по очереди свойство-значение данного пользователя, например [name]: John, [age]: 35...

//После данной операции пользователю должно поступить предложение, с помощью confirm, продолжить манипуляции (выбрать очередной пункт из списка приглашения). Если ответ положительный, то всё начинается заново, а если отрицательный - программа прощается с пользователем и завершает своё выполнение.

//Просмотреть список всех пользователей:
//При выборе "Просмотреть список всех пользователей", в консоль должно вывестись количество пользователей, а затем список всех пользователей с таким же подробным выводом свойств-значений как и в "Авторизации". Каждый последующий пользователь должен быть отделён чертой в консоли. Если же пользователей ещё нет, то в консоль должно вывестись соответствующее сообщение.

//После данной операции пользователю должно поступить предложение, с помощью confirm, продолжить манипуляции (выбрать очередной пункт из списка приглашения). Если ответ положительный, то всё начинается заново, а если отрицательный - программа прощается с пользователем и завершает своё выполнение.

//Изменить данные пользователя:
//К этому пункту я не прилагаю подробного описания и он подразумевает поиск самостоятельного решения (не обязательно к выполнению).

//Выйти:
//При выборе "Выйти", программа прощается с пользователем с помощью alert и завершается

//Особенности:
//Предыдущие особенности остаются
//Воспользоваться объектами
//Воспользоваться массивами
//Воспользоваться функциями
//Итого:
//Должна получиться своеобразная База Данных пользователей, которую можно пополнять новыми пользователями и искать существующих.

const users = [
	{
		name: "John",
		surname: "Doe",
		age: 90,
		email: "jd@gmail.com",
		password: 1111,
	},
	{
		name: "Micke",
		surname: "Moor",
		age: 15,
		email: "mm@gmail.com",
		password: 3333,
	},
	{
		name: "Jany",
		surname: "Coock",
		age: 22,
		email: "jc@gmail.com",
		password: 5555,
	}
];



isRunning = true;
while (isRunning) {
	const greeting = prompt("Do you want a)Registre, b) Log in, с)See the list of users d)Change your datd, q)Quit?");
	switch (greeting.toLowerCase()) {
		case "a":
			registreUser();
			break;
		case "b":
			loginUser();
			break;
		case "c":
			seeTheUsersList();
			break;
		case "d":
			exchangeDataUser();
			break;
		case "q":
			isRunning = false;
			break;

		default:
			alert("Something went wrong. Try again.")
			break;
	}
}
