<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('blog.backToBlog') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">SQL</span>
          <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">Database</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          {{ t('blog.itvw.sql.title') }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Feb 15, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t('blog.itvw.sql.intro') }}
          </p>
        </section>

        <!-- Q1 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q1') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a1')"></p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
            <li v-html="t('blog.itvw.sql.a1l1')"></li>
            <li v-html="t('blog.itvw.sql.a1l2')"></li>
            <li v-html="t('blog.itvw.sql.a1l3')"></li>
            <li v-html="t('blog.itvw.sql.a1l4')"></li>
            <li v-html="t('blog.itvw.sql.a1l5')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.sql.q1c1')" :code="codes[0]" />
        </section>

        <!-- Q2 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q2') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a2')"></p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">{{ t('blog.itvw.sql.q2th1') }}</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">{{ t('blog.itvw.sql.q2th2') }}</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">{{ t('blog.itvw.sql.q2th3') }}</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-medium">{{ t('blog.itvw.sql.q2td1') }}</td>
                  <td class="py-3 pr-4">{{ t('blog.itvw.sql.q2td2') }}</td>
                  <td class="py-3">{{ t('blog.itvw.sql.q2td3') }}</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-medium">{{ t('blog.itvw.sql.q2td4') }}</td>
                  <td class="py-3 pr-4">{{ t('blog.itvw.sql.q2td5') }}</td>
                  <td class="py-3">{{ t('blog.itvw.sql.q2td6') }}</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-medium">{{ t('blog.itvw.sql.q2td7') }}</td>
                  <td class="py-3 pr-4">{{ t('blog.itvw.sql.q2td8') }}</td>
                  <td class="py-3">{{ t('blog.itvw.sql.q2td9') }}</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4 font-medium">{{ t('blog.itvw.sql.q2td10') }}</td>
                  <td class="py-3 pr-4">{{ t('blog.itvw.sql.q2td11') }}</td>
                  <td class="py-3">{{ t('blog.itvw.sql.q2td12') }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodeBlock :title="t('blog.itvw.sql.q2c1')" :code="codes[1]" />
        </section>

        <!-- Q3 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q3') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a3')"></p>
          <CodeBlock :title="t('blog.itvw.sql.q3c1')" :code="codes[2]" />
          <div class="tip-box mt-4" v-html="t('blog.itvw.sql.q3tip')"></div>
        </section>

        <!-- Q4 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q4') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.sql.a4') }}
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
            <li v-html="t('blog.itvw.sql.a4l1')"></li>
            <li v-html="t('blog.itvw.sql.a4l2')"></li>
            <li v-html="t('blog.itvw.sql.a4l3')"></li>
            <li v-html="t('blog.itvw.sql.a4l4')"></li>
            <li v-html="t('blog.itvw.sql.a4l5')"></li>
            <li v-html="t('blog.itvw.sql.a4l6')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.sql.q4c1')" :code="codes[3]" />
        </section>

        <!-- Q5 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q5') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a5')"></p>
          <CodeBlock :title="t('blog.itvw.sql.q5c1')" :code="codes[4]" />
        </section>

        <!-- Q6 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q6') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a6')"></p>
          <CodeBlock :title="t('blog.itvw.sql.q6c1')" :code="codes[5]" />
        </section>

        <!-- Q7 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q7') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a7')"></p>
          <CodeBlock :title="t('blog.itvw.sql.q7c1')" :code="codes[6]" />
          <div class="tip-box mt-4" v-html="t('blog.itvw.sql.q7tip')"></div>
        </section>

        <!-- Q8 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q8') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.sql.a8') }}
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
            <li v-html="t('blog.itvw.sql.a8l1')"></li>
            <li v-html="t('blog.itvw.sql.a8l2')"></li>
            <li v-html="t('blog.itvw.sql.a8l3')"></li>
            <li v-html="t('blog.itvw.sql.a8l4')"></li>
            <li v-html="t('blog.itvw.sql.a8l5')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.sql.q8c1')" :code="codes[7]" />
        </section>

        <!-- Q9 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q9') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a9')"></p>
          <CodeBlock :title="t('blog.itvw.sql.q9c1')" :code="codes[8]" />
        </section>

        <!-- Q10 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q10') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.sql.a10') }}
          </p>
          <CodeBlock :title="t('blog.itvw.sql.q10c1')" :code="codes[9]" />
        </section>

        <!-- Q11 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q11') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a11')"></p>
          <CodeBlock :title="t('blog.itvw.sql.q11c1')" :code="codes[10]" />
        </section>

        <!-- Q12 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q12') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a12')"></p>
          <CodeBlock :title="t('blog.itvw.sql.q12c1')" :code="codes[11]" />
          <div class="tip-box mt-4" v-html="t('blog.itvw.sql.q12tip')"></div>
        </section>

        <!-- Q13 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q13') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a13')"></p>
          <CodeBlock :title="t('blog.itvw.sql.q13c1')" :code="codes[12]" />
        </section>

        <!-- Q14 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q14') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a14')"></p>
          <CodeBlock :title="t('blog.itvw.sql.q14c1')" :code="codes[13]" />
        </section>

        <!-- Q15 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q15') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a15')"></p>
          <CodeBlock :title="t('blog.itvw.sql.q15c1')" :code="codes[14]" />
          <div class="tip-box mt-4" v-html="t('blog.itvw.sql.q15tip')"></div>
        </section>

        <!-- Q16 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q16') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a16')"></p>
          <CodeBlock :title="t('blog.itvw.sql.q16c1')" :code="codes[15]" />
        </section>

        <!-- Q17 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q17') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a17')"></p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
            <li v-html="t('blog.itvw.sql.a17l1')"></li>
            <li v-html="t('blog.itvw.sql.a17l2')"></li>
            <li v-html="t('blog.itvw.sql.a17l3')"></li>
            <li v-html="t('blog.itvw.sql.a17l4')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.sql.q17c1')" :code="codes[16]" />
        </section>

        <!-- Q18 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q18') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a18')"></p>
          <CodeBlock :title="t('blog.itvw.sql.q18c1')" :code="codes[17]" />
        </section>

        <!-- Q19 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q19') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.sql.a19') }}
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
            <li v-html="t('blog.itvw.sql.a19l1')"></li>
            <li v-html="t('blog.itvw.sql.a19l2')"></li>
            <li v-html="t('blog.itvw.sql.a19l3')"></li>
            <li v-html="t('blog.itvw.sql.a19l4')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.sql.q19c1')" :code="codes[18]" />
        </section>

        <!-- Q20 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.sql.q20') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.sql.a20')"></p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
            <li v-html="t('blog.itvw.sql.a20l1')"></li>
            <li v-html="t('blog.itvw.sql.a20l2')"></li>
            <li v-html="t('blog.itvw.sql.a20l3')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.sql.q20c1')" :code="codes[19]" />
          <div class="tip-box mt-4" v-html="t('blog.itvw.sql.q20tip')"></div>
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.sql.sum1')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.sql.sum2')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.sql.sum3')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.sql.sum4')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.sql.sum5')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.sql.sum6')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.sql.sum7')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.sql.sum8')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.sql.sum9')"></span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.sql.sum10')"></span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({ title: `${t('blog.itvw.sql.title')} - Koeuk Dev` })

const codes = [
  `-- DDL (Data Definition Language)
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE
);

ALTER TABLE users ADD COLUMN age INT;
DROP TABLE users;
TRUNCATE TABLE users;

-- DML (Data Manipulation Language)
INSERT INTO users (name, email) VALUES ('John', 'john@example.com');
UPDATE users SET name = 'Jane' WHERE id = 1;
DELETE FROM users WHERE id = 1;

-- DCL (Data Control Language)
GRANT SELECT, INSERT ON users TO 'app_user'@'localhost';
REVOKE INSERT ON users FROM 'app_user'@'localhost';

-- TCL (Transaction Control Language)
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;  -- or ROLLBACK;`,

  `-- SQL: Relational Database (MySQL)
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(255) UNIQUE
);

SELECT * FROM users WHERE name = 'John';

-- NoSQL: Document Database (MongoDB syntax for comparison)
-- db.users.insertOne({
--     name: "John",
--     email: "john@example.com",
--     hobbies: ["reading", "coding"],  -- flexible schema
--     address: { city: "Phnom Penh" }  -- nested documents
-- });
--
-- db.users.find({ name: "John" });`,

  `-- Primary Key: Uniquely identifies each row
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

-- Foreign Key: References another table's primary key
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    product VARCHAR(100),
    amount DECIMAL(10, 2),
    FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Composite Primary Key
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);`,

  `CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,

    -- NOT NULL: Cannot be empty
    name VARCHAR(100) NOT NULL,

    -- UNIQUE: No duplicate values allowed
    email VARCHAR(255) UNIQUE,

    -- CHECK: Must satisfy condition
    age INT CHECK (age >= 18 AND age <= 65),

    -- DEFAULT: Automatic value if not provided
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    -- Combining constraints
    salary DECIMAL(10, 2) NOT NULL CHECK (salary > 0)
);

-- Adding constraints after table creation
ALTER TABLE employees
ADD CONSTRAINT chk_salary CHECK (salary >= 30000);`,

  `-- Basic SELECT
SELECT * FROM users;
SELECT name, email FROM users;

-- WHERE clause to filter rows
SELECT * FROM users WHERE age > 25;
SELECT * FROM users WHERE name LIKE 'J%';
SELECT * FROM users WHERE age BETWEEN 20 AND 30;
SELECT * FROM users WHERE status IN ('active', 'pending');

-- ORDER BY: Sort results
SELECT * FROM users ORDER BY name ASC;         -- A to Z
SELECT * FROM users ORDER BY created_at DESC;  -- newest first
SELECT * FROM users ORDER BY age DESC, name ASC; -- multi-column sort

-- LIMIT: Restrict number of rows
SELECT * FROM users LIMIT 10;           -- first 10 rows
SELECT * FROM users LIMIT 10 OFFSET 20; -- skip 20, get next 10 (pagination)

-- Combining everything
SELECT name, email, age
FROM users
WHERE status = 'active'
ORDER BY age DESC
LIMIT 5;`,

  `-- COUNT: Number of rows
SELECT COUNT(*) AS total_users FROM users;
SELECT COUNT(DISTINCT department) AS dept_count FROM employees;

-- SUM: Total of a numeric column
SELECT SUM(salary) AS total_salary FROM employees;

-- AVG: Average value
SELECT AVG(salary) AS avg_salary FROM employees;

-- MIN / MAX: Smallest / Largest value
SELECT MIN(salary) AS lowest_salary FROM employees;
SELECT MAX(salary) AS highest_salary FROM employees;

-- Combining aggregate functions
SELECT
    COUNT(*) AS total_employees,
    SUM(salary) AS total_salary,
    AVG(salary) AS avg_salary,
    MIN(salary) AS min_salary,
    MAX(salary) AS max_salary
FROM employees
WHERE status = 'active';`,

  `-- GROUP BY: Group rows by column values
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;

-- GROUP BY with aggregate functions
SELECT
    department,
    COUNT(*) AS total,
    AVG(salary) AS avg_salary,
    MAX(salary) AS max_salary
FROM employees
GROUP BY department;

-- HAVING: Filter groups (after aggregation)
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;

-- WHERE vs HAVING
SELECT department, COUNT(*) AS count, AVG(salary) AS avg_salary
FROM employees
WHERE status = 'active'          -- filters rows BEFORE grouping
GROUP BY department
HAVING COUNT(*) > 5              -- filters groups AFTER grouping
ORDER BY avg_salary DESC;`,

  `-- Sample tables:
-- users (id, name, email)
-- orders (id, user_id, total)

-- INNER JOIN: Only matching rows from both tables
SELECT u.name, o.id AS order_id, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN: All users, even without orders (NULLs for no match)
SELECT u.name, o.id AS order_id, o.total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

-- RIGHT JOIN: All orders, even without matching users
SELECT u.name, o.id AS order_id, o.total
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;

-- FULL OUTER JOIN: All rows from both tables
SELECT u.name, o.id AS order_id, o.total
FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;

-- CROSS JOIN: Every combination (Cartesian product)
SELECT u.name, p.product_name
FROM users u
CROSS JOIN products p;

-- Multiple JOINs
SELECT u.name, o.id, p.product_name, oi.quantity
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id;`,

  `-- Scalar Subquery: Returns a single value
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Row Subquery: Returns a single row
SELECT *
FROM employees
WHERE (department, salary) = (
    SELECT department, MAX(salary)
    FROM employees
    WHERE department = 'Engineering'
);

-- Table Subquery: Returns a result set (used with IN, EXISTS)
SELECT name, department
FROM employees
WHERE department IN (
    SELECT department
    FROM employees
    GROUP BY department
    HAVING COUNT(*) > 10
);

-- Correlated Subquery: References outer query
SELECT e.name, e.salary, e.department
FROM employees e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department = e.department
);

-- EXISTS Subquery
SELECT u.name
FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);`,

  `-- Self Join: Join a table with itself
-- Example: Find employees and their managers

-- employees table:
-- id | name    | manager_id
-- 1  | Alice   | NULL       (CEO, no manager)
-- 2  | Bob     | 1          (reports to Alice)
-- 3  | Charlie | 1          (reports to Alice)
-- 4  | David   | 2          (reports to Bob)

SELECT
    e.name AS employee,
    m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

-- Result:
-- employee | manager
-- Alice    | NULL
-- Bob      | Alice
-- Charlie  | Alice
-- David    | Bob

-- Find employees who earn more than their manager
SELECT
    e.name AS employee,
    e.salary AS emp_salary,
    m.name AS manager,
    m.salary AS mgr_salary
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;`,

  `-- Simple CASE WHEN
SELECT
    name,
    salary,
    CASE
        WHEN salary >= 100000 THEN 'Senior'
        WHEN salary >= 60000  THEN 'Mid-level'
        WHEN salary >= 30000  THEN 'Junior'
        ELSE 'Intern'
    END AS level
FROM employees;

-- CASE WHEN in WHERE clause
SELECT * FROM orders
WHERE CASE
    WHEN status = 'shipped' THEN shipped_date IS NOT NULL
    WHEN status = 'pending' THEN created_at > '2026-01-01'
    ELSE TRUE
END;

-- CASE WHEN for conditional aggregation
SELECT
    department,
    COUNT(*) AS total,
    SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) AS active_count,
    SUM(CASE WHEN status = 'inactive' THEN 1 ELSE 0 END) AS inactive_count,
    ROUND(
        SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 1
    ) AS active_percentage
FROM employees
GROUP BY department;`,

  `-- ROW_NUMBER: Unique sequential number for each row
SELECT
    name,
    department,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num
FROM employees;

-- RANK: Same rank for ties, skips next numbers
-- DENSE_RANK: Same rank for ties, does NOT skip
SELECT
    name,
    department,
    salary,
    RANK()       OVER (ORDER BY salary DESC) AS rank_num,
    DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank_num
FROM employees;
-- salary: 100k, 90k, 90k, 80k
-- RANK:       1,    2,    2,    4  (skips 3)
-- DENSE_RANK: 1,    2,    2,    3  (no skip)

-- PARTITION BY: Window function per group
SELECT
    name,
    department,
    salary,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank,
    AVG(salary)  OVER (PARTITION BY department) AS dept_avg_salary
FROM employees;

-- Get top 3 earners per department
SELECT * FROM (
    SELECT
        name, department, salary,
        ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn
    FROM employees
) ranked
WHERE rn <= 3;`,

  `-- Basic CTE
WITH active_users AS (
    SELECT id, name, email
    FROM users
    WHERE status = 'active'
)
SELECT au.name, COUNT(o.id) AS order_count
FROM active_users au
LEFT JOIN orders o ON au.id = o.user_id
GROUP BY au.name;

-- Multiple CTEs
WITH
    dept_stats AS (
        SELECT department, AVG(salary) AS avg_salary
        FROM employees
        GROUP BY department
    ),
    high_earners AS (
        SELECT e.name, e.department, e.salary
        FROM employees e
        JOIN dept_stats d ON e.department = d.department
        WHERE e.salary > d.avg_salary
    )
SELECT * FROM high_earners ORDER BY salary DESC;

-- Recursive CTE: Org chart / hierarchy
WITH RECURSIVE org_chart AS (
    -- Base case: top-level (no manager)
    SELECT id, name, manager_id, 1 AS level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive case: employees with managers
    SELECT e.id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart ORDER BY level, name;`,

  `-- UNION: Combine results, remove duplicates
SELECT name, email FROM customers
UNION
SELECT name, email FROM suppliers;

-- UNION ALL: Combine results, keep duplicates (faster)
SELECT name, email FROM customers
UNION ALL
SELECT name, email FROM suppliers;

-- INTERSECT: Only rows that appear in BOTH queries
SELECT name FROM customers
INTERSECT
SELECT name FROM suppliers;

-- EXCEPT (or MINUS in Oracle): Rows in first query NOT in second
SELECT name FROM customers
EXCEPT
SELECT name FROM suppliers;

-- Practical example: Find users who placed orders but never left a review
SELECT user_id FROM orders
EXCEPT
SELECT user_id FROM reviews;`,

  `-- Create a basic index
CREATE INDEX idx_users_email ON users(email);

-- Composite index (multi-column)
CREATE INDEX idx_users_name_dept ON employees(department, name);

-- Unique index
CREATE UNIQUE INDEX idx_users_email_unique ON users(email);

-- Clustered Index (one per table, determines physical row order)
-- In MySQL InnoDB, the PRIMARY KEY is automatically the clustered index
CREATE TABLE users (
    id INT PRIMARY KEY,  -- This is the clustered index
    name VARCHAR(100),
    email VARCHAR(255)
);

-- Non-clustered Index (multiple per table, separate structure)
CREATE INDEX idx_name ON users(name);       -- non-clustered
CREATE INDEX idx_email ON users(email);     -- non-clustered

-- Show indexes on a table
SHOW INDEX FROM users;

-- Drop an index
DROP INDEX idx_users_email ON users;

-- Check query performance with EXPLAIN
EXPLAIN SELECT * FROM users WHERE email = 'john@example.com';`,

  `-- Create a View (virtual table, no data stored)
CREATE VIEW active_employees AS
SELECT id, name, department, salary
FROM employees
WHERE status = 'active';

-- Query the view like a regular table
SELECT * FROM active_employees WHERE department = 'Engineering';

-- Update a view
CREATE OR REPLACE VIEW active_employees AS
SELECT id, name, department, salary, hire_date
FROM employees
WHERE status = 'active';

-- Drop a view
DROP VIEW active_employees;

-- Materialized View (stores data physically, PostgreSQL)
CREATE MATERIALIZED VIEW monthly_sales AS
SELECT
    DATE_TRUNC('month', order_date) AS month,
    SUM(total) AS total_sales,
    COUNT(*) AS order_count
FROM orders
GROUP BY DATE_TRUNC('month', order_date);

-- Must refresh manually to update data
REFRESH MATERIALIZED VIEW monthly_sales;

-- Query materialized view (fast, reads stored data)
SELECT * FROM monthly_sales ORDER BY month DESC;`,

  `-- Start a transaction
START TRANSACTION;

-- Transfer $500 from account 1 to account 2
UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;

-- If everything is OK
COMMIT;

-- If something goes wrong
-- ROLLBACK;

-- SAVEPOINT: Partial rollback
START TRANSACTION;
INSERT INTO orders (user_id, total) VALUES (1, 99.99);
SAVEPOINT order_created;

INSERT INTO order_items (order_id, product_id, qty) VALUES (1, 5, 2);
-- Oops, wrong item! Roll back to savepoint
ROLLBACK TO order_created;

INSERT INTO order_items (order_id, product_id, qty) VALUES (1, 8, 1);
COMMIT;

-- Set Isolation Level
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;`,

  `-- Stored Procedure: Performs actions, does not need to return a value
DELIMITER //
CREATE PROCEDURE raise_salary(
    IN emp_id INT,
    IN percentage DECIMAL(5, 2)
)
BEGIN
    UPDATE employees
    SET salary = salary * (1 + percentage / 100)
    WHERE id = emp_id;
END //
DELIMITER ;

-- Call a stored procedure
CALL raise_salary(1, 10.00);  -- Give employee 1 a 10% raise

-- Stored Procedure with OUT parameter
DELIMITER //
CREATE PROCEDURE get_employee_count(
    IN dept VARCHAR(100),
    OUT total INT
)
BEGIN
    SELECT COUNT(*) INTO total
    FROM employees
    WHERE department = dept;
END //
DELIMITER ;

CALL get_employee_count('Engineering', @count);
SELECT @count;

-- Function: Must return a value, can be used in SELECT
DELIMITER //
CREATE FUNCTION calculate_bonus(salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN CASE
        WHEN salary >= 100000 THEN salary * 0.20
        WHEN salary >= 60000  THEN salary * 0.15
        ELSE salary * 0.10
    END;
END //
DELIMITER ;

-- Use function in a query
SELECT name, salary, calculate_bonus(salary) AS bonus
FROM employees;`,

  `-- UNNORMALIZED (Repeating groups, multiple values in one column)
-- | id | name  | phones                |
-- | 1  | John  | 012345678, 098765432  |  -- violates 1NF

-- 1NF: Atomic values, no repeating groups
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);
CREATE TABLE user_phones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    phone VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 2NF: No partial dependencies (all non-key columns depend on FULL primary key)
-- BAD (partial dependency on order_id only):
-- | order_id | product_id | product_name | quantity |
--
-- GOOD (separate the product info):
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);

-- 3NF: No transitive dependencies (non-key depends only on key)
-- BAD: employee -> department_id -> department_name
-- GOOD: separate department into its own table
CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);`,

  `-- ER Diagram represented as SQL tables
-- Entities: Users, Orders, Products, Categories

-- One-to-Many: One user has many orders
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    order_date DATE DEFAULT CURRENT_DATE,
    total DECIMAL(10, 2),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- One-to-Many: One category has many products
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Many-to-Many: Orders can have many products, products in many orders
-- Requires a junction/pivot table
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT DEFAULT 1,
    price DECIMAL(10, 2),
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Relationships Summary:
-- users     1 --- * orders       (one-to-many)
-- categories 1 --- * products    (one-to-many)
-- orders    * --- * products     (many-to-many via order_items)`,
]
</script>

<style scoped>
:deep(.inline-code) {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-blue-500 dark:text-blue-400;
}
.tip-box {
  @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300;
}
.qa-section {
  @apply mb-8 p-6 rounded-xl bg-gray-50 dark:bg-primary-light/50 border border-gray-200 dark:border-gray-700;
}
</style>
