<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Back to Blog
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs rounded-full font-medium">MySQL</span>
          <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs rounded-full font-medium">Interview</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          MySQL Interview Questions
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Feb 20, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            MySQL is one of the most popular relational database management systems in the world. Whether you are preparing for a junior or senior developer interview, these <strong>20 commonly asked MySQL interview questions</strong> will help you solidify your understanding of core database concepts, SQL syntax, and performance optimization.
          </p>
        </section>

        <!-- Q1 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">1. What is MySQL? What are its key features?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) for managing data. It is developed and maintained by Oracle Corporation.
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><strong>Open-source</strong> and free to use (Community Edition)</li>
            <li><strong>Cross-platform</strong> — runs on Linux, Windows, macOS</li>
            <li><strong>High performance</strong> with query caching and indexing</li>
            <li><strong>ACID compliant</strong> (with InnoDB engine)</li>
            <li><strong>Replication support</strong> — Master-Slave and Master-Master</li>
            <li><strong>Scalable</strong> — handles millions of rows efficiently</li>
            <li><strong>Strong community</strong> and extensive documentation</li>
          </ul>
          <CodeBlock title="Check MySQL Version" :code="codes[0]" />
        </div>

        <!-- Q2 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">2. What is the difference between MySQL and SQL?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">SQL</code> (Structured Query Language) is a <strong>language</strong> used to communicate with relational databases. <code class="inline-code">MySQL</code> is a <strong>database management system</strong> that uses SQL as its query language.
          </p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">SQL</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">MySQL</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">A query language (standard)</td>
                  <td class="py-3">A database software (RDBMS)</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Defines how to interact with data</td>
                  <td class="py-3">Implements SQL to store/retrieve data</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4">Used by many RDBMS (PostgreSQL, SQLite, etc.)</td>
                  <td class="py-3">One specific RDBMS that uses SQL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodeBlock title="SQL is the language, MySQL is the tool" :code="codes[1]" />
        </div>

        <!-- Q3 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">3. What are Storage Engines? InnoDB vs MyISAM?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Storage engines are the underlying components that MySQL uses to handle SQL operations for different table types. The two most common are <code class="inline-code">InnoDB</code> (default) and <code class="inline-code">MyISAM</code>.
          </p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">Feature</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">InnoDB</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">MyISAM</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Transactions</td>
                  <td class="py-3 pr-4 text-green-500">Yes (ACID)</td>
                  <td class="py-3 text-red-500">No</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Foreign Keys</td>
                  <td class="py-3 pr-4 text-green-500">Yes</td>
                  <td class="py-3 text-red-500">No</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Row-level Locking</td>
                  <td class="py-3 pr-4 text-green-500">Yes</td>
                  <td class="py-3 text-red-500">No (table-level)</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4">Full-text Search</td>
                  <td class="py-3 pr-4 text-green-500">Yes (5.6+)</td>
                  <td class="py-3 text-green-500">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodeBlock title="Storage Engine Commands" :code="codes[2]" />
        </div>

        <!-- Q4 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">4. What are PRIMARY KEY, FOREIGN KEY, and UNIQUE KEY?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Keys are constraints that enforce data integrity in relational databases.
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><strong>PRIMARY KEY</strong> — Uniquely identifies each row. Cannot be NULL. Only one per table.</li>
            <li><strong>FOREIGN KEY</strong> — References a PRIMARY KEY in another table. Enforces referential integrity.</li>
            <li><strong>UNIQUE KEY</strong> — Ensures all values in a column are distinct. Allows one NULL. Multiple per table.</li>
          </ul>
          <CodeBlock title="Key Constraints Example" :code="codes[3]" />
        </div>

        <!-- Q5 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">5. What are Indexes? What types exist?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            An index is a data structure that improves the speed of data retrieval on a table at the cost of additional storage and slower writes. Think of it like an index in a book.
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><strong>PRIMARY Index</strong> — Automatically created on PRIMARY KEY</li>
            <li><strong>UNIQUE Index</strong> — Ensures uniqueness of values</li>
            <li><strong>Composite Index</strong> — Index on multiple columns</li>
            <li><strong>FULLTEXT Index</strong> — For full-text search on text columns</li>
            <li><strong>SPATIAL Index</strong> — For geographic data types</li>
          </ul>
          <CodeBlock title="Index Examples" :code="codes[4]" />
        </div>

        <!-- Q6 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">6. What is the difference between WHERE and HAVING?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Both filter rows, but they work at different stages of query execution.
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><code class="inline-code">WHERE</code> — Filters rows <strong>before</strong> grouping (cannot use aggregate functions)</li>
            <li><code class="inline-code">HAVING</code> — Filters groups <strong>after</strong> GROUP BY (can use aggregate functions)</li>
          </ul>
          <CodeBlock title="WHERE vs HAVING" :code="codes[5]" />
        </div>

        <!-- Q7 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">7. What are JOINs? Explain each type.</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            JOINs combine rows from two or more tables based on a related column. MySQL supports several types of joins:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><strong>INNER JOIN</strong> — Returns only matching rows from both tables</li>
            <li><strong>LEFT JOIN</strong> — All rows from left table + matched rows from right (NULL if no match)</li>
            <li><strong>RIGHT JOIN</strong> — All rows from right table + matched rows from left (NULL if no match)</li>
            <li><strong>FULL OUTER JOIN</strong> — All rows from both tables (MySQL uses UNION to simulate)</li>
            <li><strong>CROSS JOIN</strong> — Cartesian product of both tables (every combination)</li>
          </ul>
          <CodeBlock title="JOIN Examples" :code="codes[6]" />
        </div>

        <!-- Q8 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">8. What is a Subquery? Correlated vs Non-Correlated?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A subquery is a query nested inside another query. It can appear in SELECT, FROM, WHERE, or HAVING clauses.
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><strong>Non-correlated</strong> — The inner query runs independently. It executes once and passes the result to the outer query.</li>
            <li><strong>Correlated</strong> — The inner query depends on the outer query. It executes once for each row of the outer query.</li>
          </ul>
          <CodeBlock title="Subquery Examples" :code="codes[7]" />
        </div>

        <!-- Q9 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">9. What is Normalization? Explain 1NF, 2NF, 3NF.</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Normalization is the process of organizing data to reduce redundancy and improve data integrity. Each normal form builds on the previous one:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><strong>1NF (First Normal Form)</strong> — Each column contains atomic (indivisible) values. No repeating groups.</li>
            <li><strong>2NF (Second Normal Form)</strong> — Must be in 1NF + all non-key columns fully depend on the entire primary key (no partial dependency).</li>
            <li><strong>3NF (Third Normal Form)</strong> — Must be in 2NF + no transitive dependency (non-key columns must not depend on other non-key columns).</li>
          </ul>
          <CodeBlock title="Normalization Example" :code="codes[8]" />
        </div>

        <!-- Q10 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">10. What are Transactions? What are ACID properties?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A transaction is a sequence of SQL operations executed as a single unit of work. Either all operations succeed (COMMIT) or all fail (ROLLBACK).
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><strong>Atomicity</strong> — All or nothing. If one part fails, the entire transaction is rolled back.</li>
            <li><strong>Consistency</strong> — Database moves from one valid state to another.</li>
            <li><strong>Isolation</strong> — Concurrent transactions do not interfere with each other.</li>
            <li><strong>Durability</strong> — Once committed, changes are permanent even after a crash.</li>
          </ul>
          <CodeBlock title="Transaction Example" :code="codes[9]" />
        </div>

        <!-- Q11 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">11. What is the difference between DELETE, TRUNCATE, and DROP?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            All three remove data, but they work differently:
          </p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">Feature</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">DELETE</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">TRUNCATE</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">DROP</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Removes</td>
                  <td class="py-3 pr-4">Specific rows</td>
                  <td class="py-3 pr-4">All rows</td>
                  <td class="py-3">Entire table</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">WHERE clause</td>
                  <td class="py-3 pr-4 text-green-500">Yes</td>
                  <td class="py-3 pr-4 text-red-500">No</td>
                  <td class="py-3 text-red-500">No</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Rollback</td>
                  <td class="py-3 pr-4 text-green-500">Yes</td>
                  <td class="py-3 pr-4 text-red-500">No</td>
                  <td class="py-3 text-red-500">No</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4">Speed</td>
                  <td class="py-3 pr-4">Slower</td>
                  <td class="py-3 pr-4">Faster</td>
                  <td class="py-3">Fastest</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodeBlock title="DELETE vs TRUNCATE vs DROP" :code="codes[10]" />
        </div>

        <!-- Q12 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">12. What are Views?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A view is a virtual table based on the result of a SQL query. It does not store data itself — it dynamically pulls data from the underlying tables each time it is queried. Views simplify complex queries, restrict data access, and provide abstraction.
          </p>
          <CodeBlock title="View Examples" :code="codes[11]" />
        </div>

        <!-- Q13 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">13. What are Stored Procedures and Functions?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Both are reusable blocks of SQL code stored in the database. The key difference:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><strong>Stored Procedure</strong> — Can return zero or multiple values. Called with <code class="inline-code">CALL</code>. Can have IN, OUT, INOUT parameters.</li>
            <li><strong>Function</strong> — Must return exactly one value. Can be used in SQL expressions (SELECT, WHERE, etc.).</li>
          </ul>
          <CodeBlock title="Stored Procedure and Function" :code="codes[12]" />
        </div>

        <!-- Q14 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">14. What are Triggers?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A trigger is a stored program that automatically executes in response to an event (INSERT, UPDATE, DELETE) on a table. Triggers are useful for auditing, validation, and maintaining derived data.
          </p>
          <CodeBlock title="Trigger Example" :code="codes[13]" />
        </div>

        <!-- Q15 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">15. What is the difference between CHAR and VARCHAR?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Both store string data, but they handle storage differently:
          </p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">Feature</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">CHAR</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">VARCHAR</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Storage</td>
                  <td class="py-3 pr-4">Fixed-length (padded with spaces)</td>
                  <td class="py-3">Variable-length</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Max length</td>
                  <td class="py-3 pr-4">255 characters</td>
                  <td class="py-3">65,535 characters</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Performance</td>
                  <td class="py-3 pr-4">Faster for fixed-size data</td>
                  <td class="py-3">Better for variable-size data</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4">Use case</td>
                  <td class="py-3 pr-4">Country codes, status flags</td>
                  <td class="py-3">Names, emails, descriptions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodeBlock title="CHAR vs VARCHAR" :code="codes[14]" />
        </div>

        <!-- Q16 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">16. What is UNION vs UNION ALL?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Both combine results from multiple SELECT statements. The difference is how they handle duplicates:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><code class="inline-code">UNION</code> — Combines results and <strong>removes duplicates</strong> (slower, applies DISTINCT)</li>
            <li><code class="inline-code">UNION ALL</code> — Combines results and <strong>keeps all rows</strong> including duplicates (faster)</li>
          </ul>
          <CodeBlock title="UNION vs UNION ALL" :code="codes[15]" />
        </div>

        <!-- Q17 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">17. What is GROUP BY and aggregate functions?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">GROUP BY</code> groups rows that have the same values in specified columns into summary rows. It is used with aggregate functions:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><code class="inline-code">COUNT()</code> — Number of rows</li>
            <li><code class="inline-code">SUM()</code> — Total of a numeric column</li>
            <li><code class="inline-code">AVG()</code> — Average value</li>
            <li><code class="inline-code">MAX()</code> / <code class="inline-code">MIN()</code> — Highest / lowest value</li>
          </ul>
          <CodeBlock title="GROUP BY and Aggregates" :code="codes[16]" />
        </div>

        <!-- Q18 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">18. What is a Deadlock? How to prevent it?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a circular dependency where none can proceed. MySQL automatically detects deadlocks and rolls back one transaction.
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><strong>Access tables in the same order</strong> across all transactions</li>
            <li><strong>Keep transactions short</strong> and minimize lock time</li>
            <li><strong>Use appropriate isolation levels</strong></li>
            <li><strong>Add proper indexes</strong> to reduce lock scope</li>
          </ul>
          <CodeBlock title="Deadlock Scenario and Prevention" :code="codes[17]" />
        </div>

        <!-- Q19 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">19. What is Replication? Master-Slave?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Replication is the process of copying data from one MySQL server (source/master) to one or more servers (replica/slave). This provides:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><strong>High Availability</strong> — If master fails, a replica can take over</li>
            <li><strong>Read Scaling</strong> — Distribute read queries across replicas</li>
            <li><strong>Backup</strong> — Replicas serve as live backups</li>
            <li><strong>Analytics</strong> — Run heavy reports on replicas without impacting the master</li>
          </ul>
          <CodeBlock title="Replication Configuration" :code="codes[18]" />
        </div>

        <!-- Q20 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">20. How to optimize MySQL queries?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Query optimization is crucial for application performance. Here are the most effective strategies:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><strong>Use EXPLAIN</strong> to analyze query execution plans</li>
            <li><strong>Add proper indexes</strong> on columns used in WHERE, JOIN, ORDER BY</li>
            <li><strong>Avoid SELECT *</strong> — only select needed columns</li>
            <li><strong>Use LIMIT</strong> for pagination</li>
            <li><strong>Optimize JOINs</strong> — ensure join columns are indexed</li>
            <li><strong>Avoid functions on indexed columns</strong> in WHERE clauses</li>
            <li><strong>Use query caching</strong> where appropriate</li>
            <li><strong>Normalize data</strong> but denormalize for read-heavy workloads</li>
          </ul>
          <CodeBlock title="Query Optimization Techniques" :code="codes[19]" />
        </div>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Summary</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span><strong>MySQL Basics</strong> — Open-source RDBMS using SQL, with InnoDB as the default engine</span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span><strong>Keys and Indexes</strong> — PRIMARY, FOREIGN, UNIQUE keys enforce integrity; indexes boost query speed</span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span><strong>JOINs</strong> — INNER, LEFT, RIGHT, FULL, CROSS for combining data from multiple tables</span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span><strong>Subqueries</strong> — Nested queries, correlated and non-correlated</span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span><strong>Normalization</strong> — 1NF, 2NF, 3NF to reduce redundancy</span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span><strong>Transactions</strong> — ACID properties guarantee data reliability</span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span><strong>Views, Procedures, Triggers</strong> — Database objects for abstraction and automation</span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span><strong>Performance</strong> — Use EXPLAIN, proper indexing, and query optimization techniques</span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span><strong>Replication</strong> — Master-Slave setup for high availability and read scaling</span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span><strong>Deadlocks</strong> — Prevent with consistent lock ordering and short transactions</span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'MySQL Interview Questions - Koeuk Dev' })

const codes = [
  `-- Check MySQL version
SELECT VERSION();

-- Show all databases
SHOW DATABASES;

-- Create a new database
CREATE DATABASE my_app;

-- Use a database
USE my_app;

-- Show all tables in current database
SHOW TABLES;`,

  `-- SQL is the language you write:
SELECT * FROM users WHERE age > 18;
INSERT INTO users (name, email) VALUES ('John', 'john@example.com');
UPDATE users SET name = 'Jane' WHERE id = 1;
DELETE FROM users WHERE id = 1;

-- MySQL is the software that executes these SQL statements
-- Other RDBMS like PostgreSQL, SQLite, SQL Server also use SQL
-- but with slight syntax differences`,

  `-- Show available storage engines
SHOW ENGINES;

-- Create table with InnoDB (default, recommended)
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    total DECIMAL(10,2),
    FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;

-- Create table with MyISAM (legacy, no transactions)
CREATE TABLE logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM;

-- Check engine of a specific table
SHOW TABLE STATUS WHERE Name = 'orders';`,

  `-- PRIMARY KEY: Unique identifier for each row
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL
);

-- UNIQUE KEY: Ensures no duplicate values
ALTER TABLE users ADD UNIQUE KEY unique_email (email);

-- FOREIGN KEY: Links to another table's primary key
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    product VARCHAR(255),
    amount DECIMAL(10,2),
    FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Composite PRIMARY KEY
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);`,

  `-- Create a single-column index
CREATE INDEX idx_email ON users(email);

-- Create a composite index (multi-column)
CREATE INDEX idx_name_city ON users(last_name, city);

-- Create a unique index
CREATE UNIQUE INDEX idx_unique_email ON users(email);

-- Create a FULLTEXT index for text search
CREATE FULLTEXT INDEX idx_content ON articles(title, body);

-- Use FULLTEXT search
SELECT * FROM articles
WHERE MATCH(title, body) AGAINST('MySQL tutorial' IN BOOLEAN MODE);

-- Show indexes on a table
SHOW INDEX FROM users;

-- Drop an index
DROP INDEX idx_email ON users;`,

  `-- WHERE: filters rows BEFORE grouping
SELECT department, COUNT(*) AS emp_count
FROM employees
WHERE salary > 50000        -- filter individual rows first
GROUP BY department;

-- HAVING: filters groups AFTER grouping
SELECT department, COUNT(*) AS emp_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;        -- filter groups with more than 5 employees

-- Combined: WHERE + HAVING
SELECT department, AVG(salary) AS avg_salary
FROM employees
WHERE hire_date > '2020-01-01'   -- only employees hired after 2020
GROUP BY department
HAVING AVG(salary) > 60000;     -- only departments with avg salary > 60k`,

  `-- Sample tables
-- users: id, name, email
-- orders: id, user_id, total

-- INNER JOIN: only matching rows
SELECT u.name, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN: all users, even without orders
SELECT u.name, o.total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

-- RIGHT JOIN: all orders, even without matching users
SELECT u.name, o.total
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;

-- FULL OUTER JOIN (simulated with UNION in MySQL)
SELECT u.name, o.total FROM users u LEFT JOIN orders o ON u.id = o.user_id
UNION
SELECT u.name, o.total FROM users u RIGHT JOIN orders o ON u.id = o.user_id;

-- CROSS JOIN: every user paired with every order
SELECT u.name, o.total
FROM users u
CROSS JOIN orders o;

-- Self JOIN: employees with their managers
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;`,

  `-- Non-correlated subquery: inner query runs ONCE independently
SELECT name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary) FROM employees   -- runs once, returns one value
);

-- Subquery in FROM clause (derived table)
SELECT dept, avg_sal
FROM (
    SELECT department AS dept, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY department
) AS dept_averages
WHERE avg_sal > 60000;

-- Correlated subquery: inner query runs for EACH outer row
SELECT e.name, e.salary, e.department
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department = e.department  -- references outer query
);

-- EXISTS with correlated subquery
SELECT u.name
FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);`,

  `-- UNNORMALIZED (bad): repeating groups, multiple values in one cell
-- | id | name | phones                |
-- | 1  | John | 012345678, 098765432  |

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

-- 2NF: Remove partial dependencies
-- Bad: order_items(order_id, product_id, product_name, quantity)
-- product_name depends only on product_id (partial dependency)

-- Good: separate into two tables
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- 3NF: Remove transitive dependencies
-- Bad: employees(id, name, dept_id, dept_name, dept_location)
-- dept_name and dept_location depend on dept_id, not on employee id

-- Good: separate department info
CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    location VARCHAR(255)
);
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(id)
);`,

  `-- Start a transaction
START TRANSACTION;

-- Transfer $100 from account 1 to account 2
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- If both succeed, make changes permanent
COMMIT;

-- If something goes wrong, undo everything
-- ROLLBACK;

-- Using SAVEPOINT for partial rollback
START TRANSACTION;

INSERT INTO orders (user_id, total) VALUES (1, 99.99);
SAVEPOINT order_created;

INSERT INTO order_items (order_id, product_id, quantity) VALUES (LAST_INSERT_ID(), 5, 2);
-- Oops, something wrong with this item
ROLLBACK TO order_created;

-- The order still exists, only the item was rolled back
INSERT INTO order_items (order_id, product_id, quantity) VALUES (LAST_INSERT_ID(), 3, 1);
COMMIT;

-- Check current isolation level
SELECT @@transaction_isolation;

-- Set isolation level
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;`,

  `-- DELETE: removes specific rows (can use WHERE, supports rollback)
DELETE FROM users WHERE id = 5;
DELETE FROM orders WHERE created_at < '2024-01-01';

-- TRUNCATE: removes ALL rows instantly (resets AUTO_INCREMENT)
TRUNCATE TABLE logs;

-- DROP: removes the entire table (structure + data)
DROP TABLE IF EXISTS temp_data;

-- Key differences:
-- DELETE   -> DML, row-by-row, logged, can rollback, keeps AUTO_INCREMENT
-- TRUNCATE -> DDL, drops & recreates table, cannot rollback, resets AUTO_INCREMENT
-- DROP     -> DDL, removes table entirely, cannot rollback`,

  `-- Create a view
CREATE VIEW active_users AS
SELECT id, name, email, last_login
FROM users
WHERE status = 'active'
AND last_login > DATE_SUB(NOW(), INTERVAL 30 DAY);

-- Use the view like a regular table
SELECT * FROM active_users;
SELECT name, email FROM active_users WHERE name LIKE 'J%';

-- Create a view with JOINs
CREATE VIEW order_summary AS
SELECT
    u.name AS customer,
    COUNT(o.id) AS total_orders,
    SUM(o.total) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;

-- Query the view
SELECT * FROM order_summary WHERE total_spent > 1000;

-- Update a view
CREATE OR REPLACE VIEW active_users AS
SELECT id, name, email FROM users WHERE status = 'active';

-- Drop a view
DROP VIEW IF EXISTS active_users;`,

  `-- STORED PROCEDURE: reusable block of SQL
DELIMITER //

CREATE PROCEDURE GetUserOrders(IN userId INT)
BEGIN
    SELECT o.id, o.total, o.created_at
    FROM orders o
    WHERE o.user_id = userId
    ORDER BY o.created_at DESC;
END //

DELIMITER ;

-- Call the procedure
CALL GetUserOrders(1);

-- Procedure with OUT parameter
DELIMITER //

CREATE PROCEDURE GetOrderTotal(IN userId INT, OUT totalAmount DECIMAL(10,2))
BEGIN
    SELECT SUM(total) INTO totalAmount
    FROM orders
    WHERE user_id = userId;
END //

DELIMITER ;

CALL GetOrderTotal(1, @total);
SELECT @total;

-- FUNCTION: must return a single value
DELIMITER //

CREATE FUNCTION CalculateDiscount(price DECIMAL(10,2), discount_pct INT)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN price - (price * discount_pct / 100);
END //

DELIMITER ;

-- Use function in a query
SELECT name, price, CalculateDiscount(price, 10) AS discounted_price
FROM products;`,

  `-- Create a trigger that logs changes
DELIMITER //

CREATE TRIGGER before_user_update
BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
    INSERT INTO user_audit_log (user_id, field_changed, old_value, new_value, changed_at)
    VALUES (OLD.id, 'email', OLD.email, NEW.email, NOW());
END //

DELIMITER ;

-- Trigger to auto-update stock after order
DELIMITER //

CREATE TRIGGER after_order_insert
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    UPDATE products
    SET stock = stock - NEW.quantity
    WHERE id = NEW.product_id;
END //

DELIMITER ;

-- Trigger to prevent negative balance
DELIMITER //

CREATE TRIGGER before_withdrawal
BEFORE UPDATE ON accounts
FOR EACH ROW
BEGIN
    IF NEW.balance < 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient balance';
    END IF;
END //

DELIMITER ;

-- Show all triggers
SHOW TRIGGERS;

-- Drop a trigger
DROP TRIGGER IF EXISTS before_user_update;`,

  `-- CHAR: fixed-length, always uses specified bytes
CREATE TABLE countries (
    code CHAR(2) NOT NULL,      -- 'US', 'KH', 'JP' (always 2 chars)
    name VARCHAR(100)
);

-- VARCHAR: variable-length, uses only needed bytes + 1-2 bytes overhead
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),          -- 'John' uses 5 bytes, 'Alexander' uses 10 bytes
    email VARCHAR(255),
    status CHAR(1) DEFAULT 'A'  -- 'A' for active, 'I' for inactive
);

-- Storage comparison:
-- CHAR(10) storing 'Hello':  'Hello     ' (10 bytes, padded with spaces)
-- VARCHAR(10) storing 'Hello': 'Hello' (6 bytes = 5 chars + 1 length byte)`,

  `-- UNION: combines results, removes duplicates
SELECT name, email FROM customers
UNION
SELECT name, email FROM suppliers;
-- If 'John' appears in both tables, shown only once

-- UNION ALL: combines results, keeps duplicates (faster)
SELECT name, email FROM customers
UNION ALL
SELECT name, email FROM suppliers;
-- If 'John' appears in both tables, shown twice

-- Practical example: Get all transactions
SELECT id, amount, 'income' AS type FROM income
UNION ALL
SELECT id, amount, 'expense' AS type FROM expenses
ORDER BY amount DESC;

-- Rules:
-- 1. Same number of columns in each SELECT
-- 2. Columns must have compatible data types
-- 3. Column names come from the first SELECT`,

  `-- COUNT: number of rows
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;

-- SUM: total of a column
SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department;

-- AVG: average value
SELECT department, ROUND(AVG(salary), 2) AS avg_salary
FROM employees
GROUP BY department;

-- MAX / MIN: highest and lowest
SELECT department,
    MAX(salary) AS highest_salary,
    MIN(salary) AS lowest_salary
FROM employees
GROUP BY department;

-- Multiple aggregates combined
SELECT
    department,
    COUNT(*) AS headcount,
    SUM(salary) AS total_salary,
    ROUND(AVG(salary), 2) AS avg_salary,
    MAX(salary) AS max_salary,
    MIN(salary) AS min_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;

-- GROUP BY with multiple columns
SELECT department, job_title, COUNT(*) AS count
FROM employees
GROUP BY department, job_title;`,

  `-- Deadlock scenario:
-- Transaction 1:                    Transaction 2:
-- UPDATE accounts SET ... WHERE id=1  UPDATE accounts SET ... WHERE id=2
-- UPDATE accounts SET ... WHERE id=2  UPDATE accounts SET ... WHERE id=1
-- (waits for T2 to release id=2)     (waits for T1 to release id=1)
-- DEADLOCK!

-- Prevention strategy 1: Consistent lock ordering
-- Always lock rows in the same order (by id ascending)
START TRANSACTION;
SELECT * FROM accounts WHERE id = 1 FOR UPDATE;
SELECT * FROM accounts WHERE id = 2 FOR UPDATE;
-- Now do your updates
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;

-- Prevention strategy 2: Use lock timeout
SET innodb_lock_wait_timeout = 5;  -- wait max 5 seconds

-- Check for deadlocks in the log
SHOW ENGINE INNODB STATUS;

-- View current locks
SELECT * FROM information_schema.INNODB_TRX;`,

  `-- MASTER configuration (my.cnf)
-- [mysqld]
-- server-id = 1
-- log_bin = mysql-bin
-- binlog_do_db = my_app

-- On Master: create replication user
CREATE USER 'replica_user'@'%' IDENTIFIED BY 'secure_password';
GRANT REPLICATION SLAVE ON *.* TO 'replica_user'@'%';
FLUSH PRIVILEGES;

-- Check master status
SHOW MASTER STATUS;
-- +------------------+----------+
-- | File             | Position |
-- | mysql-bin.000001 | 154      |
-- +------------------+----------+

-- SLAVE configuration (my.cnf)
-- [mysqld]
-- server-id = 2
-- relay_log = mysql-relay-bin

-- On Slave: configure connection to master
CHANGE MASTER TO
    MASTER_HOST = '192.168.1.100',
    MASTER_USER = 'replica_user',
    MASTER_PASSWORD = 'secure_password',
    MASTER_LOG_FILE = 'mysql-bin.000001',
    MASTER_LOG_POS = 154;

-- Start replication
START SLAVE;

-- Check slave status
SHOW SLAVE STATUS\\G`,

  `-- 1. Use EXPLAIN to analyze queries
EXPLAIN SELECT * FROM users WHERE email = 'john@example.com';
EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 5;

-- 2. Add indexes on frequently queried columns
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- 3. Avoid SELECT * — only select what you need
-- Bad:
SELECT * FROM users;
-- Good:
SELECT id, name, email FROM users;

-- 4. Use LIMIT for pagination
SELECT id, name FROM products ORDER BY created_at DESC LIMIT 20 OFFSET 40;

-- 5. Avoid functions on indexed columns in WHERE
-- Bad (cannot use index):
SELECT * FROM users WHERE YEAR(created_at) = 2025;
-- Good (can use index):
SELECT * FROM users WHERE created_at >= '2025-01-01' AND created_at < '2026-01-01';

-- 6. Use EXISTS instead of IN for large subqueries
-- Slower:
SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
-- Faster:
SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);

-- 7. Optimize JOINs — ensure join columns are indexed
SELECT u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id  -- u.id (PK, indexed), o.user_id (needs index)
GROUP BY u.id, u.name;

-- 8. Use query profiling
SET profiling = 1;
SELECT * FROM users WHERE status = 'active';
SHOW PROFILES;
SHOW PROFILE FOR QUERY 1;`,
]
</script>

<style scoped>
.inline-code {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-orange-500 dark:text-orange-400;
}
.tip-box {
  @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300;
}
.qa-section {
  @apply mb-8 p-6 rounded-xl bg-gray-50 dark:bg-primary-light/50 border border-gray-200 dark:border-gray-700;
}
</style>
