ДЗ можна здавати однією гілкою, але кожне завдання має бути вирішене в окремому файлі і всі файли мають бути підключені до index.html файлу одночасно.


Розпакування об’єкта (object destructuring)
Завдання: Є об’єкт:

```js
const user = {
name:"Alex",
age: 25,
city: "Kyiv",
job: "Frontend"
};
```
Виконайте без методів:

Створіть окремі змінні name, age, city, job через деструктуризацію.
Створіть новий об’єкт shortInfo, який містить лише name і city.
Створіть новий об’єкт renamed, у якому ключі будуть перейменовані:
name → fullName
city → location
-------

Створення нового масиву вручну
Завдання: Є:
```js
const a = [1, 2, 3];
const b = [4, 5];
```
Сформуйте масив c без методів і без циклів, який виглядає так:

Copy code
```js
[1, 2, 3, 4, 5]
```
Можна тільки:

доступ до індексів,
написати руками: ``const c = [a[0], a[1], ...]``
-----

Робота з масивом об’єктів (тільки доступ за індексом)
Завдання: Є масив:
```js
const people = [
{ name: "Anna", age: 22 },
{ name: "Oleg", age: 31 },
{ name: "Maria", age: 27 }
];
```
Створіть змінну firstPersonName → ім'я першої людини.
Створіть змінну oldest, у яку запишіть об’єкт найстаршої людини (порівняйте ``people[0].age, people[1].age, people[2].age``).
Створіть об’єкт 

```js
ageSummary: {
total: people[0].age + people[1].age + people[2].age,
average: (same_sum) / 3
}
```
----

Модель "кошика товарів" (без push, без циклів)
Завдання: Є:
```js
const cart = [
{ title: "Book", price: 200, qty: 2 },
{ title: "Laptop", price: 30000, qty: 1 }
];
```
Створіть змінну totalPrice, де порахуйте суму: ``cart[0].price * cart[0].qty + cart[1].price * cart[1].qty``
Додайте третій товар у новий масив updatedCart (тільки вручну), наприклад:
```js
{ title: "Pen", price: 20, qty: 5 }
```
Створіть змінну itemNames, де у вигляді рядка: "Book, Laptop, Pen" (самостійно об’єднайте: ``cart[0].title + ", " + cart[1].title + ...``)