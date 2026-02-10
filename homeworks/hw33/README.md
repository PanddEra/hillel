## 1. Object.seal(obj)

**What it does:**
- ❌ Cannot add new properties
- ❌ Cannot delete existing properties
- ✅ Can modify existing properties (if writable)

**Example:**
```js
const obj = { a: 1 };
Object.seal(obj);

obj.a = 2;      // OK
obj.b = 3;      // Cannot add
delete obj.a;   // Cannot delete
console.log(Object.isSealed(obj)); // true
```
Use case: When you want to fix the object structure but still allow updating values.

## 2. Object.freeze(obj)
**What it does:**

- ❌ Cannot add new properties
- ❌ Cannot delete existing properties
- ❌ Cannot modify existing properties

**Example:**
```js
const obj = { a: 1 };
Object.freeze(obj);

obj.a = 2;      // ❌ Cannot change (TypeError in strict mode)
obj.b = 3;      // ❌ Cannot add
delete obj.a;   // ❌ Cannot delete
console.log(Object.isFrozen(obj)); // true
```
Use case: When you want a completely immutable object, like constants.

## 3. Key Differences
| Feature                | Seal        | Freeze      |
|------------------------|-------------|-------------|
| Add new properties     | ❌         | ❌          |
| Delete properties      | ❌         | ❌          |
| Modify existing values | ✅         | ❌          |
| Shallow only           | ✅         | ✅          |

## 4. Summary
**Seal → locks the structure, values can still change.**

**Freeze → locks everything, fully immutable.**

**Both are shallow, and freeze blocks setter modifications (TypeError in strict mode).**














Мета

Закріпити `Object.defineProperty`, прапорці `writable/enumerable/configurable`, `getter/setter`, `freeze/seal`.

**Завдання**

Створіть об’єкт `user` із полями:
 - `_firstName` (службове поле)
 - `_lastName` (службове поле)
 - `createdAt` (дата створення, тільки для читання)

Додайте accessor-властивість `fullName`:
 - `getter` повертає `"First Last"`
 - `setter` приймає рядок `"First Last"` і:
   - перевіряє, що це string
   - перевіряє, що є 2 слова
   - кожне слово мінімум 2 символи
   - **якщо невалідно — кидає `Error`**

Через дескриптори налаштуйте:
 - `_firstName, _lastName: enumerable: false`
 - `createdAt: writable: false, configurable: false`
 - `fullName: configurable: false, enumerable: true`

Додайте метод `lockProfile()`:
 - після виклику об’єкт має стати `sealed`
 - перевірте через `Object.isSealed(user)`
 - Виведіть у консоль:
   - дескриптори всіх полів `(Object.getOwnPropertyDescriptors)`
   - результат спроби:
     - додати нове поле після `lockProfile`
     - змінити `createdAt`
     - видалити `fullName`

Критерії приймання:

- `fullName` коректно працює в обидва боки `(get/set)`.
- Службові поля не потрапляють у `Object.keys(user)`.
- `createdAt` не змінюється.
- Після `lockProfile` нові поля не додаються, існуючі не видаляються.

Бонус

Зробіть версію `lockHard()`, яка використовує `Object.freeze(user)`, і порівняйте поведінку із `seal`.
