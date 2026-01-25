Взяти файли з ДЗ 27 і розділити JS логіку на окремі модулі, на власний розсуд.

Не забувайте про декопозицію на SRP

https://it-blog.in.ua/pryntsyp-yedynoyi-vidpovidalnosti-single-responsibility/
Приклад розділення логіки можете подивитись на уроці.

Можете використовувати Чат ГПТ, але тільки для пояснень того як правильно розділити - БЕЗ ГЕНЕРАЦІЇ КОДУ

**Anti Patterns ->**

* ContactService не імпортує UI

 `contactService → X → ui`

* Validation не знає про DOM

`validation → X → Bootstrap`

`validation → X → listRenderer`

* UI не знає про сервіс

 `uiList → X → contactService`

* Toasts не тригерять delete

 `uiToasts → X → contactService`