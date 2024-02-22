-- DDL COMMANDS / DATABASE
DROP DATABASE eshop;
CREATE  eshop;

--DDL COMMANDS
CREATE TABLE products(
    --name type options
    id integer,
    name character varying(30),
    price integer
);

CREATE TABLE money(
    amount integer,
    currency character varying(3),
    product_id integer
);


--data management (date din tabelul din baza de date)
--------------------------------
INSERT INTO products VALUES (1, 'iPhone', 1000);
INSERT INTO products VALUES (2, 'AirPods2', 500);
INSERT INTO products VALUES (4, 'MacBook', 2500);

--selectare la tabel(* - toate produsele)
SELECT * FROM products;

UPDATE products SET price = 1050 WHERE id = 1;

--stergere
DELETE FROM products WHERE id = 3;