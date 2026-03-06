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
          SQL Database Interview Questions
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Feb 15, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. Whether you are preparing for a junior or senior database role, mastering these 20 commonly asked SQL interview questions will help you build a solid foundation and ace your next interview.
          </p>
        </section>

        <!-- Q1 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">1. What is SQL? What are the types of SQL commands?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            SQL stands for <strong>Structured Query Language</strong>. It is used to communicate with relational databases to create, read, update, and delete data. SQL commands are grouped into five categories:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
            <li><code class="inline-code">DDL</code> (Data Definition Language) — CREATE, ALTER, DROP, TRUNCATE</li>
            <li><code class="inline-code">DML</code> (Data Manipulation Language) — SELECT, INSERT, UPDATE, DELETE</li>
            <li><code class="inline-code">DCL</code> (Data Control Language) — GRANT, REVOKE</li>
            <li><code class="inline-code">TCL</code> (Transaction Control Language) — COMMIT, ROLLBACK, SAVEPOINT</li>
            <li><code class="inline-code">DQL</code> (Data Query Language) — SELECT (sometimes categorized separately)</li>
          </ul>
          <CodeBlock title="SQL Command Types" :code="codes[0]" />
        </section>

        <!-- Q2 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">2. What is the difference between SQL and NoSQL?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            SQL databases are <strong>relational</strong> (table-based) while NoSQL databases are <strong>non-relational</strong> and can store data in documents, key-value pairs, graphs, or wide-column formats.
          </p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">Feature</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">SQL</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">NoSQL</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-medium">Structure</td>
                  <td class="py-3 pr-4">Fixed schema, tables</td>
                  <td class="py-3">Flexible schema, documents</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-medium">Scalability</td>
                  <td class="py-3 pr-4">Vertical</td>
                  <td class="py-3">Horizontal</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-medium">ACID</td>
                  <td class="py-3 pr-4">Strong ACID compliance</td>
                  <td class="py-3">Eventual consistency (usually)</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4 font-medium">Examples</td>
                  <td class="py-3 pr-4">MySQL, PostgreSQL, SQL Server</td>
                  <td class="py-3">MongoDB, Redis, Cassandra</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodeBlock title="SQL vs NoSQL Examples" :code="codes[1]" />
        </section>

        <!-- Q3 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">3. What is a Primary Key vs Foreign Key?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A <strong>Primary Key</strong> uniquely identifies each record in a table. It must be unique and cannot be NULL. A <strong>Foreign Key</strong> is a column that creates a relationship between two tables by referencing the primary key of another table.
          </p>
          <CodeBlock title="Primary Key & Foreign Key" :code="codes[2]" />
          <div class="tip-box mt-4">
            <strong>Key difference:</strong> A table can have only one primary key but can have multiple foreign keys. Foreign keys enforce referential integrity between tables.
          </div>
        </section>

        <!-- Q4 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">4. What are Constraints in SQL?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Constraints are rules enforced on data columns to ensure accuracy and reliability. The most common constraints are:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
            <li><code class="inline-code">NOT NULL</code> — Column cannot have NULL values</li>
            <li><code class="inline-code">UNIQUE</code> — All values in a column must be different</li>
            <li><code class="inline-code">CHECK</code> — Values must satisfy a specific condition</li>
            <li><code class="inline-code">DEFAULT</code> — Sets a default value when none is specified</li>
            <li><code class="inline-code">PRIMARY KEY</code> — Combination of NOT NULL and UNIQUE</li>
            <li><code class="inline-code">FOREIGN KEY</code> — References a primary key in another table</li>
          </ul>
          <CodeBlock title="SQL Constraints" :code="codes[3]" />
        </section>

        <!-- Q5 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">5. What is the SELECT statement? How do ORDER BY and LIMIT work?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">SELECT</code> retrieves data from one or more tables. <code class="inline-code">ORDER BY</code> sorts the results in ascending (ASC) or descending (DESC) order. <code class="inline-code">LIMIT</code> restricts the number of rows returned.
          </p>
          <CodeBlock title="SELECT, ORDER BY, LIMIT" :code="codes[4]" />
        </section>

        <!-- Q6 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">6. What are Aggregate Functions?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Aggregate functions perform a calculation on a set of values and return a single result. The most commonly used ones are <code class="inline-code">COUNT</code>, <code class="inline-code">SUM</code>, <code class="inline-code">AVG</code>, <code class="inline-code">MIN</code>, and <code class="inline-code">MAX</code>.
          </p>
          <CodeBlock title="Aggregate Functions" :code="codes[5]" />
        </section>

        <!-- Q7 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">7. What is GROUP BY and HAVING?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">GROUP BY</code> groups rows that share the same values into summary rows. <code class="inline-code">HAVING</code> filters groups after aggregation (unlike <code class="inline-code">WHERE</code>, which filters rows before aggregation).
          </p>
          <CodeBlock title="GROUP BY & HAVING" :code="codes[6]" />
          <div class="tip-box mt-4">
            <strong>WHERE vs HAVING:</strong> Use <code class="inline-code">WHERE</code> to filter individual rows before grouping. Use <code class="inline-code">HAVING</code> to filter groups after aggregation.
          </div>
        </section>

        <!-- Q8 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">8. What are the different types of JOINs?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            JOINs combine rows from two or more tables based on a related column. The main types are:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
            <li><strong>INNER JOIN</strong> — Returns only matching rows from both tables</li>
            <li><strong>LEFT JOIN</strong> — Returns all rows from the left table, with matches from the right</li>
            <li><strong>RIGHT JOIN</strong> — Returns all rows from the right table, with matches from the left</li>
            <li><strong>FULL OUTER JOIN</strong> — Returns all rows when there is a match in either table</li>
            <li><strong>CROSS JOIN</strong> — Returns the Cartesian product of both tables</li>
          </ul>
          <CodeBlock title="Types of JOINs" :code="codes[7]" />
        </section>

        <!-- Q9 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">9. What are Subqueries?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A subquery is a query nested inside another query. There are three types: <strong>Scalar</strong> (returns a single value), <strong>Row</strong> (returns a single row), and <strong>Table</strong> (returns a result set that acts as a virtual table).
          </p>
          <CodeBlock title="Subqueries" :code="codes[8]" />
        </section>

        <!-- Q10 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">10. What is a Self Join?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A self join is when a table is joined with itself. This is useful for finding relationships within the same table, such as employees and their managers.
          </p>
          <CodeBlock title="Self Join" :code="codes[9]" />
        </section>

        <!-- Q11 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">11. What is CASE WHEN?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">CASE WHEN</code> is SQL's conditional expression, similar to if-else statements in programming. It allows you to add conditional logic directly in your queries.
          </p>
          <CodeBlock title="CASE WHEN" :code="codes[10]" />
        </section>

        <!-- Q12 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">12. What are Window Functions?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Window functions perform calculations across a set of rows related to the current row without collapsing them into a single output. Common window functions include <code class="inline-code">ROW_NUMBER()</code>, <code class="inline-code">RANK()</code>, and <code class="inline-code">DENSE_RANK()</code>.
          </p>
          <CodeBlock title="Window Functions" :code="codes[11]" />
          <div class="tip-box mt-4">
            <strong>RANK vs DENSE_RANK:</strong> <code class="inline-code">RANK()</code> skips numbers after ties (1, 1, 3), while <code class="inline-code">DENSE_RANK()</code> does not skip (1, 1, 2).
          </div>
        </section>

        <!-- Q13 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">13. What is a CTE (Common Table Expression)?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A CTE is a temporary named result set defined using the <code class="inline-code">WITH</code> keyword. It makes complex queries more readable and can be referenced multiple times within the same query. CTEs can also be recursive.
          </p>
          <CodeBlock title="Common Table Expression" :code="codes[12]" />
        </section>

        <!-- Q14 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">14. What is the difference between UNION and INTERSECT?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">UNION</code> combines results from two queries and removes duplicates (<code class="inline-code">UNION ALL</code> keeps duplicates). <code class="inline-code">INTERSECT</code> returns only the rows that appear in both result sets. <code class="inline-code">EXCEPT</code> (or <code class="inline-code">MINUS</code>) returns rows from the first query that are not in the second.
          </p>
          <CodeBlock title="UNION, INTERSECT, EXCEPT" :code="codes[13]" />
        </section>

        <!-- Q15 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">15. What is an Index? Clustered vs Non-clustered?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            An index improves the speed of data retrieval on a table at the cost of additional storage and slower writes. A <strong>Clustered Index</strong> sorts and stores data rows physically in order (one per table). A <strong>Non-clustered Index</strong> creates a separate structure with pointers to the data rows (multiple per table).
          </p>
          <CodeBlock title="Indexes" :code="codes[14]" />
          <div class="tip-box mt-4">
            <strong>When to use indexes:</strong> Add indexes on columns frequently used in WHERE, JOIN, and ORDER BY clauses. Avoid over-indexing as it slows down INSERT/UPDATE/DELETE operations.
          </div>
        </section>

        <!-- Q16 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">16. What is a View? What is a Materialized View?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A <strong>View</strong> is a virtual table based on the result of a SQL query. It does not store data itself. A <strong>Materialized View</strong> physically stores the result set and must be refreshed to reflect changes in the underlying data.
          </p>
          <CodeBlock title="Views" :code="codes[15]" />
        </section>

        <!-- Q17 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">17. What are Transactions and Isolation Levels?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A <strong>transaction</strong> is a sequence of SQL operations treated as a single unit of work. Transactions follow ACID properties (Atomicity, Consistency, Isolation, Durability). Isolation levels control how transactions interact with each other:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
            <li><code class="inline-code">READ UNCOMMITTED</code> — Can read uncommitted changes (dirty reads)</li>
            <li><code class="inline-code">READ COMMITTED</code> — Only reads committed data</li>
            <li><code class="inline-code">REPEATABLE READ</code> — Guarantees same data if read again</li>
            <li><code class="inline-code">SERIALIZABLE</code> — Full isolation, transactions run sequentially</li>
          </ul>
          <CodeBlock title="Transactions" :code="codes[16]" />
        </section>

        <!-- Q18 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">18. What is a Stored Procedure vs Function?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Both are reusable SQL code blocks, but they differ in usage. A <strong>Stored Procedure</strong> can perform actions (INSERT, UPDATE, DELETE) and does not need to return a value. A <strong>Function</strong> must return a value and can be used inside SQL statements.
          </p>
          <CodeBlock title="Stored Procedure vs Function" :code="codes[17]" />
        </section>

        <!-- Q19 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">19. What is Database Normalization?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Normalization is the process of organizing data to reduce redundancy and improve data integrity. The main normal forms are:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
            <li><strong>1NF</strong> — Each column contains atomic (indivisible) values; no repeating groups</li>
            <li><strong>2NF</strong> — 1NF + every non-key column depends on the entire primary key</li>
            <li><strong>3NF</strong> — 2NF + no transitive dependencies (non-key depends only on key)</li>
            <li><strong>BCNF</strong> — 3NF + every determinant is a candidate key</li>
          </ul>
          <CodeBlock title="Normalization Example" :code="codes[18]" />
        </section>

        <!-- Q20 -->
        <section class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">20. What is an ER Diagram?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            An <strong>ER (Entity-Relationship) Diagram</strong> is a visual representation of the entities (tables), their attributes (columns), and the relationships between them in a database. It is used during the database design phase to plan the structure before writing SQL.
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
            <li><strong>Entity</strong> — A table (e.g., Users, Orders, Products)</li>
            <li><strong>Attribute</strong> — A column (e.g., id, name, email)</li>
            <li><strong>Relationship</strong> — How entities relate (one-to-one, one-to-many, many-to-many)</li>
          </ul>
          <CodeBlock title="ER Diagram as SQL" :code="codes[19]" />
          <div class="tip-box mt-4">
            <strong>ER Diagram tools:</strong> You can create ER diagrams using tools like dbdiagram.io, MySQL Workbench, Lucidchart, or draw.io. The diagram helps visualize relationships before writing CREATE TABLE statements.
          </div>
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>SQL Basics</strong> — DDL, DML, DCL, TCL command categories</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Keys & Constraints</strong> — Primary Key, Foreign Key, NOT NULL, UNIQUE, CHECK, DEFAULT</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Querying</strong> — SELECT, ORDER BY, LIMIT, Aggregate Functions, GROUP BY, HAVING</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>JOINs</strong> — INNER, LEFT, RIGHT, FULL OUTER, CROSS, Self Join</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Advanced Queries</strong> — Subqueries, CASE WHEN, Window Functions, CTEs</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Set Operations</strong> — UNION, INTERSECT, EXCEPT</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Performance</strong> — Indexes (Clustered vs Non-clustered)</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Database Objects</strong> — Views, Materialized Views, Stored Procedures, Functions</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Transactions</strong> — ACID properties, Isolation Levels</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">&#10003;</span><span><strong>Design</strong> — Normalization (1NF to BCNF), ER Diagrams</span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'SQL Database Interview Questions - Koeuk Dev' })

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
.inline-code {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-blue-500 dark:text-blue-400;
}
.tip-box {
  @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300;
}
.qa-section {
  @apply mb-8 p-6 rounded-xl bg-gray-50 dark:bg-primary-light/50 border border-gray-200 dark:border-gray-700;
}
</style>
