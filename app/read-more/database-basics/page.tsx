import { Article } from '@/components/ui/Article'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { ArticleSummary } from '@/components/ui/ArticleSummary'

export const metadata = {
  title: 'Database Basics: From Zero to Real Tables | Koeuk Dev',
  description: 'A database is a structured way to store, organize, and retrieve data.',
}

const codes = [
  `-- Text Types
VARCHAR(255)    -- Variable-length string (max 255 chars), e.g. name, email
TEXT            -- Long text, e.g. description, bio
CHAR(10)        -- Fixed-length string (always 10 chars)

-- Number Types
INT             -- Whole numbers, e.g. age, quantity
BIGINT          -- Large whole numbers, e.g. id
DECIMAL(10,2)   -- Exact decimal, e.g. price (10 digits, 2 after dot: 99999999.99)
FLOAT           -- Approximate decimal

-- Date/Time Types
DATE            -- Date only: 2026-03-06
DATETIME        -- Date + time: 2026-03-06 14:30:00
TIMESTAMP       -- Auto-tracks date/time

-- Other Types
BOOLEAN         -- true/false (stored as 1/0)
ENUM('a','b')   -- Only allows listed values
JSON            -- JSON data`,

  `-- Create the database
CREATE DATABASE ecommerce_shop;

-- Select it to use
USE ecommerce_shop;`,

  `CREATE TABLE users (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    first_name  VARCHAR(50) NOT NULL,
    last_name   VARCHAR(50) NOT NULL,
    email       VARCHAR(100) NOT NULL UNIQUE,
    password    VARCHAR(255) NOT NULL,
    phone       VARCHAR(20),
    address     TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`,

  `CREATE TABLE categories (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    description TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,

  `CREATE TABLE products (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    name          VARCHAR(200) NOT NULL,
    description   TEXT,
    price         DECIMAL(10,2) NOT NULL,
    stock         INT NOT NULL DEFAULT 0,
    category_id   INT,
    image_url     VARCHAR(500),
    is_active     BOOLEAN DEFAULT TRUE,
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- Foreign Key: links to categories table
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);`,

  `CREATE TABLE orders (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    user_id         INT NOT NULL,
    total_amount    DECIMAL(10,2) NOT NULL,
    status          ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled')
                    DEFAULT 'pending',
    shipping_address TEXT NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- Foreign Key: links to users table
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`,

  `CREATE TABLE order_items (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    order_id    INT NOT NULL,
    product_id  INT NOT NULL,
    quantity    INT NOT NULL DEFAULT 1,
    unit_price  DECIMAL(10,2) NOT NULL,

    -- Foreign Keys
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);`,

  `-- Insert categories
INSERT INTO categories (name, description) VALUES
('Electronics', 'Phones, laptops, and gadgets'),
('Clothing', 'Men and women fashion'),
('Books', 'Physical and digital books');

-- Insert users
INSERT INTO users (first_name, last_name, email, password, phone, address) VALUES
('John', 'Doe', 'john@example.com', 'hashed_password_123', '012-345-678', '123 Main St, Phnom Penh'),
('Jane', 'Smith', 'jane@example.com', 'hashed_password_456', '098-765-432', '456 Central Ave, Siem Reap'),
('Bob', 'Wilson', 'bob@example.com', 'hashed_password_789', '077-111-222', '789 River Rd, Battambang');

-- Insert products
INSERT INTO products (name, description, price, stock, category_id) VALUES
('iPhone 15 Pro', '256GB, Titanium Blue', 1199.99, 50, 1),
('Samsung Galaxy S24', '128GB, Phantom Black', 899.99, 75, 1),
('MacBook Pro 14"', 'M3 Pro chip, 18GB RAM', 1999.99, 30, 1),
('Cotton T-Shirt', '100% organic cotton, White', 29.99, 200, 2),
('Slim Fit Jeans', 'Dark blue denim', 59.99, 150, 2),
('Learning SQL', 'Master SQL from basics to advanced', 39.99, 100, 3);

-- Insert an order for John (user_id = 1)
INSERT INTO orders (user_id, total_amount, status, shipping_address) VALUES
(1, 1259.98, 'processing', '123 Main St, Phnom Penh');

-- Insert order items (John bought iPhone + T-Shirt)
INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES
(1, 1, 1, 1199.99),   -- 1x iPhone 15 Pro
(1, 4, 2, 29.99);     -- 2x Cotton T-Shirt`,

  `-- Get all products
SELECT * FROM products;

-- Get only name and price, sorted by price
SELECT name, price FROM products ORDER BY price DESC;

-- Get products under $100
SELECT name, price FROM products WHERE price < 100;

-- Get products in Electronics category (category_id = 1)
SELECT name, price, stock
FROM products
WHERE category_id = 1 AND is_active = TRUE;

-- Count products per category
SELECT category_id, COUNT(*) AS total_products
FROM products
GROUP BY category_id;

-- Search products by name
SELECT * FROM products WHERE name LIKE '%iPhone%';`,

  `-- Get products WITH their category name
SELECT
    p.name AS product_name,
    p.price,
    c.name AS category_name
FROM products p
INNER JOIN categories c ON p.category_id = c.id;

-- Result:
-- | product_name     | price   | category_name |
-- |------------------|---------|---------------|
-- | iPhone 15 Pro    | 1199.99 | Electronics   |
-- | Samsung Galaxy   | 899.99  | Electronics   |
-- | Cotton T-Shirt   | 29.99   | Clothing      |
-- | ...              | ...     | ...           |

-- Get order details: who bought what
SELECT
    u.first_name,
    u.last_name,
    o.id AS order_id,
    o.total_amount,
    o.status,
    p.name AS product_name,
    oi.quantity,
    oi.unit_price
FROM orders o
INNER JOIN users u ON o.user_id = u.id
INNER JOIN order_items oi ON o.id = oi.order_id
INNER JOIN products p ON oi.product_id = p.id;

-- Result:
-- | first_name | last_name | order_id | total  | status     | product        | qty | price   |
-- |------------|-----------|----------|--------|------------|----------------|-----|---------|
-- | John       | Doe       | 1        | 1259.98| processing | iPhone 15 Pro  | 1   | 1199.99 |
-- | John       | Doe       | 1        | 1259.98| processing | Cotton T-Shirt | 2   | 29.99   |

-- Get total spending per user
SELECT
    u.first_name,
    u.last_name,
    SUM(o.total_amount) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.first_name, u.last_name;`,

  `-- Update product price
UPDATE products
SET price = 999.99, updated_at = NOW()
WHERE id = 1;

-- Update order status
UPDATE orders
SET status = 'shipped'
WHERE id = 1;

-- Reduce stock after purchase
UPDATE products
SET stock = stock - 1
WHERE id = 1;

-- Delete a product
DELETE FROM products WHERE id = 6;

-- Delete all cancelled orders
DELETE FROM orders WHERE status = 'cancelled';

-- DANGER: This deletes ALL rows! Never do this without WHERE!
-- DELETE FROM products;  <-- DO NOT RUN THIS`,

  `  users              orders             order_items          products          categories
+----------+      +------------+      +-------------+      +-----------+      +------------+
| id (PK)  |----->| id (PK)    |----->| id (PK)     |      | id (PK)   |<-----| id (PK)    |
| first_name|      | user_id(FK)|      | order_id(FK)|----->| name      |      | name       |
| last_name |      | total      |      | product_id(FK)|--->| price     |      | description|
| email     |      | status     |      | quantity    |      | stock     |      +------------+
| password  |      | address    |      | unit_price  |      | category_id(FK)
| phone     |      | created_at |      +-------------+      | is_active |
| address   |      +------------+                           +-----------+
+----------+

Relationships:
  users    ---< orders      (One user has many orders)
  orders   ---< order_items (One order has many items)
  products ---< order_items (One product in many orders)
  categories --< products   (One category has many products)`
]

export default function DatabaseBasicsPage() {
  return (
    <Article
      title="Database Basics: From Zero to Real Tables"
      date="Mar 6, 2026"
      tags={['Database', 'SQL']}
      backHref="/about-me/my-info?section=rean"
    >
      <p>
        A database is a structured way to store, organize, and retrieve data. Think of it like a collection of
        spreadsheets (tables) that are connected to each other. In this guide, we&apos;ll learn database fundamentals
        with real-world examples — creating tables for an e-commerce system step by step.
      </p>

      <h2>1. What is a Database?</h2>
      <p>
        A <strong>database</strong> is an organized collection of data stored electronically. A{' '}
        <strong>relational database</strong> stores data in <strong>tables</strong> (rows and columns), and tables can
        be related to each other.
      </p>
      <blockquote>
        <strong>Real-world analogy:</strong> Imagine a school filing cabinet. Each drawer is a <strong>table</strong>{' '}
        (Students, Teachers, Classes). Each folder in a drawer is a <strong>row</strong> (one student). Each piece of
        info on the folder is a <strong>column</strong> (name, age, grade).
      </blockquote>
      <p>Key terms to know:</p>
      <ul>
        <li>
          <strong>Table</strong> — A collection of related data (like a spreadsheet)
        </li>
        <li>
          <strong>Row (Record)</strong> — A single entry in the table
        </li>
        <li>
          <strong>Column (Field)</strong> — A specific attribute (name, email, price)
        </li>
        <li>
          <strong>Primary Key (PK)</strong> — A unique identifier for each row
        </li>
        <li>
          <strong>Foreign Key (FK)</strong> — A column that links to another table&apos;s primary key
        </li>
      </ul>

      <h2>2. Common Data Types</h2>
      <p>Every column in a table has a data type that defines what kind of data it can hold:</p>
      <CodeBlock title="Common SQL Data Types" code={codes[0]} />

      <h2>3. Create a Database</h2>
      <p>Let&apos;s build a real e-commerce database from scratch. First, create the database:</p>
      <CodeBlock title="SQL" code={codes[1]} />

      <h2>4. Create Users Table</h2>
      <p>
        Every e-commerce app needs users. Let&apos;s create a <code>users</code> table to store customer information:
      </p>
      <CodeBlock title="SQL - Users Table" code={codes[2]} />
      <blockquote>
        <strong>Explanation:</strong> <code>id</code> is the primary key and auto-increments. <code>NOT NULL</code>{' '}
        means the field is required. <code>UNIQUE</code> ensures no duplicate emails.{' '}
        <code>DEFAULT CURRENT_TIMESTAMP</code> automatically sets the date when a row is created.
      </blockquote>

      <h2>5. Create Categories Table</h2>
      <p>Products belong to categories. Let&apos;s create a simple categories table:</p>
      <CodeBlock title="SQL - Categories Table" code={codes[3]} />

      <h2>6. Create Products Table</h2>
      <p>
        Now the main products table. Notice how it references the <code>categories</code> table using a{' '}
        <strong>foreign key</strong>:
      </p>
      <CodeBlock title="SQL - Products Table" code={codes[4]} />
      <blockquote>
        <strong>Foreign Key:</strong> <code>category_id</code> links each product to a category.{' '}
        <code>ON DELETE SET NULL</code> means if a category is deleted, the product&apos;s category becomes NULL instead
        of being deleted too.
      </blockquote>

      <h2>7. Create Orders Table</h2>
      <p>
        When a user buys something, we create an order. The orders table links to the <code>users</code> table:
      </p>
      <CodeBlock title="SQL - Orders Table" code={codes[5]} />

      <h2>8. Create Order Items Table</h2>
      <p>
        Each order can have multiple products. The <code>order_items</code> table connects orders and products (this is
        a <strong>many-to-many</strong> relationship):
      </p>
      <CodeBlock title="SQL - Order Items Table" code={codes[6]} />
      <blockquote>
        <strong>Why a separate table?</strong> One order can have many products, and one product can appear in many
        orders. The <code>order_items</code> table (junction table) connects them.
      </blockquote>

      <h2>9. Insert Real Data</h2>
      <p>Let&apos;s populate our tables with real data:</p>
      <CodeBlock title="SQL - Insert Data" code={codes[7]} />

      <h2>10. Query Data (SELECT)</h2>
      <p>Now let&apos;s retrieve data using common queries:</p>
      <CodeBlock title="SQL - Queries" code={codes[8]} />

      <h2>11. JOIN — Combine Tables</h2>
      <p>JOINs let you combine data from multiple tables. This is the real power of relational databases:</p>
      <CodeBlock title="SQL - JOIN Queries" code={codes[9]} />

      <h2>12. Update &amp; Delete Data</h2>
      <p>Modify and remove data from tables:</p>
      <CodeBlock title="SQL - Update & Delete" code={codes[10]} />
      <blockquote>
        <strong>Warning:</strong> Always use a <code>WHERE</code> clause with UPDATE and DELETE! Without it, ALL rows
        will be affected.
      </blockquote>

      <h2>13. Our Database Diagram</h2>
      <p>Here&apos;s how all our tables relate to each other:</p>
      <CodeBlock title="E-Commerce Database Relationships" code={codes[11]} />

      <ArticleSummary>
        <p>You now understand the fundamentals of relational databases:</p>
        <ul>
          <li>What databases, tables, rows, and columns are</li>
          <li>Common data types (INT, VARCHAR, DECIMAL, TEXT, etc.)</li>
          <li>Creating tables with PRIMARY KEY and FOREIGN KEY</li>
          <li>INSERT, SELECT, UPDATE, DELETE operations</li>
          <li>JOIN queries to combine data from multiple tables</li>
          <li>Building a real e-commerce database schema</li>
        </ul>
      </ArticleSummary>
    </Article>
  )
}
