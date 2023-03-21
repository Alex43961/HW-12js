"use strict";
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

let users = [
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




let isRunning = true;
while (isRunning) {
	const greeting = prompt("Do you want a)Registre, b) Log in, c)See the list of users, d) change user's data, q)Quit?");
	const gteetingToUser = greeting.toLowerCase();
	switch (gteetingToUser) {
		case "a":
			registreUser(users);
			console.log("[users]", users);
			console.log("New user was added " + `${users[users.length - 1].name} ` + `${users[users.length - 1].surname}`);
			const secondQuestion = confirm("Are you want to continue?")
			if (secondQuestion === false) {
				alert("Good baye " + `${users[users.length - 1].name} ` + `${users[users.length - 1].surname}` + " !");
				isRunning = false;
			}
			break;
		case "b":
			loginUser(users);
			break;
		case "c":
			seeTheUsersList(users);
			break;
		case "d":
			exchangeDataUser(users);
			break;
		case "q":
			alert("See you soon. Good baye!")
			isRunning = false;
			break;

		default:
			alert("Something went wrong. Try again.")
			break;
	}
}

function registreUser(usersList) {
	const userName = prompt("Enter yuor name");
	const userSurname = prompt("Enter yuor surname");
	const userAge = prompt("Enter your age");
	const userEmail = prompt("Enter your Email");

	let isCount = true;
	while (isCount) {
		let userPassword = prompt("Enter your password");
		let dubleUserPassword = prompt("Repeat your password");
		if (userPassword === dubleUserPassword) {
			usersList = users.push({ name: `${userName}`, surname: `${userSurname}`, age: `${userAge}`, email: `${userEmail}`, password: `${userPassword}` });
			isCount = false;
			return usersList;
		}
	}
}
function loginUser(usersList) {
	let isCount = true;
	const userEmail = prompt("Enter your Email");

	const userPassword = prompt("Enter your password");


	while (isCount) {

		for (let i = 0; i < usersList.length; i++) {

			if (userEmail === usersList[i].email && userPassword === usersList[i].password) {
				alert("User was saccessful loged in");
				console.log(usersList[i]);

				return usersList[i];
				isCount = false;
			}
		}
		isCount = alert("No such user was found. Try another time.");
	}
}

function seeTheUsersList(usersList) {
	const amountOfUsers = console.log("There are " + `${usersList.length} ` + "users was registred:");
	if (usersList.length == 0) {
		return console.log("There are no users yet");
	}
	for (let i = 0; i < usersList.length; i++) {
		console.log(usersList[i]);
		console.log("-----------------");
	}
}

function exchangeDataUser(usersList) {

	const userName = prompt("Enter your name");
	let isRunning = true;
	while (isRunning) {

		const whatNeedExchange = prompt("Woul'd you like exchange: a)Name, b)Surname, c)Age, d)Email, e)Password, q)Quit");
		switch (whatNeedExchange.toLowerCase()) {
			case "a":

				const exchangeName = prompt("Enter new name");

				for (let i = 0; i < usersList.length; i++) {
					if (usersList[i].name === userName) {
						usersList[i].name = exchangeName;
						alert("Your name was changed");
						console.log(usersList[i]);
						isRunning = false;
					}
				}

				break;
			case "b":

				const userSurname = prompt("Enter your surname")
				const exchangeSurname = prompt("Enter new surname");

				for (let i = 0; i < usersList.length; i++) {
					if (usersList[i].name === userName && usersList[i].surname === userSurname) {
						usersList[i].surname = exchangeSurname;
						alert("Your surname was changed");
						console.log(usersList[i]);
					}
				}

				break;
			case "c":
				const userAge = prompt("Enter your age");
				const exchangeAge = prompt("Enter new age");

				for (let i = 0; i < usersList.length; i++) {
					if (usersList[i].name === userName && usersList[i].age === userAge) {
						usersList[i].age = exchangeAge;
						alert("Your age was changed");
						console.log(usersList[i]);
					}
				}

				break;
			case "d":
				const userEmail = prompt("Enter your email");
				const exchangeEmail = prompt("Enter new email");

				for (let i = 0; i < usersList.length; i++) {
					if (usersList[i].name === userName && usersList[i].email === userEmail) {
						usersList[i].email = exchangeEmail;
						alert("Your email was changed");
						console.log(usersList[i]);
					}
				}

				break;
			case "e":
				const userPassword = prompt("Enter your password")
				const exchangePassword = prompt("Enter new password");

				for (let i = 0; i < usersList.length; i++) {
					if (usersList[i].name === userName && usersList[i].password === userPassword) {
						usersList[i].password = exchangePassword;
						alert("Your password was changed");
						console.log(usersList[i]);
					}
				}

				break;
			case "q":
				alert("Back to mine menu")
				isRunning = false;
				break;

			default:
				alert("Something went wrong. Try again.")
				break;
		}
	}
}

