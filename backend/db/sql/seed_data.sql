-- const db = require("./index");
-- const authHelpers = require("../../auth/helpers");
-- const passport = require("../../auth/local");
-- const utils = require("./utils");

-- INSERTING NEW users
-- ################################################

\c roomease;

INSERT INTO users (first_name, last_name, username, gender, password_digest, email, phone) VALUES ('Eric', 'Liu', 'a', 'M', '$2a$10$q8//j/bkolUGfnNCMl66ge0xTOZiYTX4PQiAkVnwY4A6tk1WXdEVa', 'ericliu@ac.c4q.nyc', '123456789');

INSERT INTO users (first_name, last_name, username, gender, password_digest, email, phone) VALUES ('Ryan', 'Omoruyi', 'ryry', 'M', '$2a$10$q8//j/bkolUGfnNCMl66ge0xTOZiYTX4PQiAkVnwY4A6tk1WXdEVa', 'ryanomoruyi@ac.c4q.nyc', '987654321');

INSERT INTO users (first_name, last_name, username, gender, password_digest, email, phone) VALUES ('Ruben', 'Profit', 'benjy', 'M', '$2a$10$q8//j/bkolUGfnNCMl66ge0xTOZiYTX4PQiAkVnwY4A6tk1WXdEVa', 'rubenprofit@ac.c4q.nyc', '83727284745');

INSERT INTO users (first_name, last_name, username, gender, password_digest, email, phone) VALUES ('Aiden', 'Shih', 'Aiden', 'M', '$2a$10$q8//j/bkolUGfnNCMl66ge0xTOZiYTX4PQiAkVnwY4A6tk1WXdEVa', 'AidenShih@ac.c4q.nyc', '2342342333');

INSERT INTO apartments (apt_name, apt_pic) VALUES ('Koala Bears', 'https://2.bp.blogspot.com/-QHTjF9WaUg0/TaItgXzcO6I/AAAAAAAAHAI/b5i1WQCM0sU/s1600/koala-wallpaper3.jpg');

INSERT INTO users_apt (user_id, apt_id) VALUES (1, 1);

INSERT INTO users_apt (user_id, apt_id) VALUES (2, 1);

INSERT INTO users_apt (user_id, apt_id) VALUES (3, 1);

INSERT INTO users_apt (user_id, apt_id) VALUES (4, 1);

-- INSERTING OLD TASKS + COMPLETED
-- ################################################

INSERT INTO tasks (apt_id, title, from_user_id, to_user_id, due_date, message, karma) VALUES (1, 'Clean Gutter', 1, 2, '2018/03/21', '', 50);

INSERT INTO tasks (apt_id, title, from_user_id, to_user_id, due_date, message, karma) VALUES (1, 'Buy Toilet Paper', 3, 1, '2018/03/22', '', 10);

INSERT INTO tasks (apt_id, title, from_user_id, to_user_id, due_date, message, karma) VALUES (1, 'Clear Out Basement', 3, 1, '2018/03/23', 'need space for party!', 20);

INSERT INTO tasks (apt_id, title, from_user_id, to_user_id, due_date, message, karma) VALUES (1, 'Clean Microwave', 3, 1, '2018/03/25', '', 10);

INSERT INTO tasks_completed (task_id, apt_id, to_user_id, karma) VALUES (1, 1, 2, 25);

INSERT INTO tasks_completed (task_id, apt_id, to_user_id, karma) VALUES (2, 1, 1, 10);

INSERT INTO tasks_completed (task_id, apt_id, to_user_id, karma) VALUES (3, 1, 1, 20);

INSERT INTO tasks_completed (task_id, apt_id, to_user_id, karma) VALUES (4, 1, 1, 10);

-- INSERTING FUTURE TASKS
-- ################################################

INSERT INTO tasks (apt_id, title, from_user_id, to_user_id, due_date, message, karma) VALUES (1, 'Buy Beer', 1, 2, '2018/04/09', 'get some IPAs for Rob', 10);

INSERT INTO tasks (apt_id, title, from_user_id, to_user_id, due_date, message, karma) VALUES (1, 'Rake Leaves', 3, 1, '2018/04/11', 'rake is in the basement', 10);

INSERT INTO tasks (apt_id, title, from_user_id, to_user_id, due_date, message, karma) VALUES (1, 'Buy Dish Soap', 4, 1, '2018/04/12', 'almost out of dish soap', 10);

INSERT INTO tasks (apt_id, title, from_user_id, to_user_id, due_date, message, karma) VALUES (1, 'Clean Bathroom', 1, 3, '2018/04/15', 'remember to clean the tub!', 50);

INSERT INTO tasks (apt_id, title, from_user_id, to_user_id, due_date, message, karma) VALUES (1, 'Buy Ramen', 1, 2, '2018/04/04', '', 10);

INSERT INTO tasks (apt_id, title, from_user_id, to_user_id, due_date, message, karma) VALUES (1, 'Buy Flowers For House', 3, 1, '2018/04/05', 'thanks :)', 10);

INSERT INTO tasks (apt_id, title, from_user_id, to_user_id, due_date, message, karma) VALUES (1, 'Tidy Kitchen', 4, 1, '2018/04/07', '', 10);

INSERT INTO tasks (apt_id, title, from_user_id, to_user_id, due_date, message, karma) VALUES (1, 'Wash Rug', 1, 3, '2018/04/08', '', 50);

-- INSERTING RECURRING TASKS + COMPLETED
-- ################################################

INSERT INTO tasks_recurring (apt_id, title, from_user_id, to_user_id, due_date_type, due_date, message, karma) VALUES (1, 'Buy Milk', 3, 1, 'week' , 3, 'Buy whole milk', 10);

INSERT INTO tasks_recurring (apt_id, title, from_user_id, to_user_id, due_date_type, due_date, message, karma) VALUES (1, 'Clean Bathroom', 2, 1, 'week', 7 , 'Shower needs scrubbing', 10);

INSERT INTO tasks_recurring_completed (task_id, apt_id, to_user_id, karma) VALUES (1, 1, 1, 10);

INSERT INTO tasks_recurring_completed (task_id, apt_id, to_user_id, karma) VALUES (2, 1, 1, 10);

-- INSERTING EXPENSES + PAYMENTS
-- ################################################

INSERT INTO tasks (apt_id, title, message, cost, from_user_id, to_user_id, due_date, karma) VALUES (1, 'Reimburse Milk', '', 1.50, 1, 2, DATE '2018/03/14', 10);

INSERT INTO tasks (apt_id, title, message, cost, from_user_id, to_user_id, due_date, karma) VALUES (1, 'Reimburse Toilet Paper', 'got the fancy tp :)', 4, 1, 2, DATE '2018/04/10', 10);

INSERT INTO tasks (apt_id, title, message, cost, from_user_id, to_user_id, due_date, karma) VALUES (1, 'Reimburse Bulk Gum', 'BOUGHT IN BULK', 20, 1, 4, DATE '2018/04/13', 10);

INSERT INTO tasks (apt_id, title, message, cost, from_user_id, to_user_id, due_date, karma) VALUES (1, 'Reimburse Groceries', 'boughgt a bunch of brocolli', 14, 1, 3, DATE '2018/04/15', 10);

INSERT INTO tasks_completed (apt_id, to_user_id, task_id, karma) VALUES (1, 1, 1, 10);

INSERT INTO tasks_completed (apt_id, to_user_id, task_id, karma) VALUES (1, 1, 2, 10);

-- INSERTING RECURRING TASKS + PAYMENTS
-- ################################################

INSERT INTO tasks_recurring (apt_id, title, message, cost, from_user_id, to_user_id, due_date_type, due_date, karma) VALUES (1, 'Rent', '', 650, 1, 2, 'month', 31, 10);

INSERT INTO tasks_recurring (apt_id, title, message, cost, from_user_id, to_user_id, due_date_type, due_date, karma) VALUES (1, 'Utilities', '', 650, 1, 2, 'month', 31, 10);

INSERT INTO tasks_recurring_completed (apt_id, to_user_id, task_id, karma) VALUES (1, 1, 1, 10);

INSERT INTO tasks_recurring_completed (apt_id, to_user_id, task_id, karma) VALUES (1, 1, 2, 10);


-- INSERTING BULLETIN NOTES
-- ################################################

INSERT INTO bulletin_notes (apt_id, from_user_id, message) VALUES (1, 1, 'My family is coming in over the weekend!');

INSERT INTO bulletin_notes (apt_id, from_user_id, message) VALUES (1, 2, 'I really like cheese');

INSERT INTO bulletin_notes (apt_id, from_user_id, message) VALUES (1, 3, 'There is lasagna in the fridge.  Help yourself!');

INSERT INTO bulletin_notes (apt_id, from_user_id, message) VALUES (1, 4, 'Who wants to go out tonight??');

-- CREATING APARTMENT GOALS
-- ################################################

INSERT INTO goals_apartment (apt_id, from_user_id, title, message, karma) VALUES (1, 3, 'Friday Night Bar Hop', '', 100);

INSERT INTO goals_apartment (apt_id, from_user_id, title, message, karma) VALUES (1, 2, 'Brunch At Locanda Verde' , '', 200);

