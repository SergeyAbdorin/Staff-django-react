Справочник сотрудников
======================

Описание
--------
Приложение с backend на Django и frontend на React.
Взаимодействие REST API через axios

Функционал
----------
1. Список отделов
2. Общий список сотрудников
3. Список сотрудников по отделам
4. Профиль сотрудника с фотографией

к сожалению, часть функционала, пока __не работает__, а именно:

5. Добавление сотрудника - есть отдельная форма добавления, но POST не принимается сервером из-за проблемы с доступом
6. Удаление сотрудника - есть кнопка удаления, не работает по той же причине

и функционал, до реализации которого не успел приступить:

7. Изменение данных сотрудника
8. Фильтрация
9. Аутентификация
10. Выгрузка списка сотрудников


Инструкция по запуску:
---------------------

После клонирования репозитория выполните следующие действия:
1. Активируйте виртуальное окружение
2. Находясь в корневой папке проекта выполните следующие команды:
```
pip install -r requirement.txt
```
*Для доступа в адмику можете использовать superuser: login: admin, password: admin1,
либо создайте своего пользователя, выполнив:
```
python manage.py createsuperuser
```
далее
```
cd frontend
npm install
npm run build
cd ..
python manage.py collectstatic
python manage.py runserver
```
 
