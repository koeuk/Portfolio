<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <!-- Back button -->
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('blog.backToBlog') }}
      </NuxtLink>

      <!-- Header -->
      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">Database</span>
          <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs rounded-full font-medium">SQL</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          {{ t('blog.db.basics.title') }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Mar 6, 2026</p>
      </div>

      <!-- Content -->
      <article class="prose-content">
        <!-- Introduction -->
        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t('blog.db.basics.intro') }}
          </p>
        </section>

        <!-- What is a Database -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.db.basics.whatIsDb') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.db.basics.whatIsDbDesc')"></p>
          <div class="tip-box mb-4" v-html="t('blog.db.basics.whatIsDbTip')"></div>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.db.basics.keyTerms') }}</p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1 font-bold">*</span>
              <span v-html="t('blog.db.basics.termTable')"></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1 font-bold">*</span>
              <span v-html="t('blog.db.basics.termRow')"></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1 font-bold">*</span>
              <span v-html="t('blog.db.basics.termColumn')"></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1 font-bold">*</span>
              <span v-html="t('blog.db.basics.termPK')"></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1 font-bold">*</span>
              <span v-html="t('blog.db.basics.termFK')"></span>
            </li>
          </ul>
        </section>

        <!-- Common Data Types -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.db.basics.dataTypes') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.db.basics.dataTypesDesc') }}
          </p>
          <CodeBlock :title="t('blog.db.basics.dataTypesTitle')" :code="codes[0]" />
        </section>

        <!-- Create Database -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.db.basics.createDb') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.db.basics.createDbDesc') }}
          </p>
          <CodeBlock :title="t('blog.db.basics.createDbTitle')" :code="codes[1]" />
        </section>

        <!-- Users Table -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.db.basics.usersTable') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.db.basics.usersTableDesc')"></p>
          <CodeBlock :title="t('blog.db.basics.usersTableTitle')" :code="codes[2]" />
          <div class="tip-box mt-4" v-html="t('blog.db.basics.usersTableTip')"></div>
        </section>

        <!-- Categories Table -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.db.basics.categoriesTable') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.db.basics.categoriesTableDesc') }}
          </p>
          <CodeBlock :title="t('blog.db.basics.categoriesTableTitle')" :code="codes[3]" />
        </section>

        <!-- Products Table -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.db.basics.productsTable') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.db.basics.productsTableDesc')"></p>
          <CodeBlock :title="t('blog.db.basics.productsTableTitle')" :code="codes[4]" />
          <div class="tip-box mt-4" v-html="t('blog.db.basics.productsTableTip')"></div>
        </section>

        <!-- Orders Table -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.db.basics.ordersTable') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.db.basics.ordersTableDesc')"></p>
          <CodeBlock :title="t('blog.db.basics.ordersTableTitle')" :code="codes[5]" />
        </section>

        <!-- Order Items Table -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.db.basics.orderItemsTable') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.db.basics.orderItemsTableDesc')"></p>
          <CodeBlock :title="t('blog.db.basics.orderItemsTableTitle')" :code="codes[6]" />
          <div class="tip-box mt-4" v-html="t('blog.db.basics.orderItemsTableTip')"></div>
        </section>

        <!-- Insert Data -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.db.basics.insertData') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.db.basics.insertDataDesc') }}
          </p>
          <CodeBlock :title="t('blog.db.basics.insertDataTitle')" :code="codes[7]" />
        </section>

        <!-- Query Data -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.db.basics.queryData') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.db.basics.queryDataDesc') }}
          </p>
          <CodeBlock :title="t('blog.db.basics.queryDataTitle')" :code="codes[8]" />
        </section>

        <!-- JOIN Queries -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.db.basics.joinData') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.db.basics.joinDataDesc') }}
          </p>
          <CodeBlock :title="t('blog.db.basics.joinDataTitle')" :code="codes[9]" />
        </section>

        <!-- Update and Delete -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.db.basics.updateDelete') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.db.basics.updateDeleteDesc') }}
          </p>
          <CodeBlock :title="t('blog.db.basics.updateDeleteTitle')" :code="codes[10]" />
          <div class="warning-box mt-4" v-html="t('blog.db.basics.updateDeleteWarning')"></div>
        </section>

        <!-- Database Diagram -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.db.basics.diagram') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.db.basics.diagramDesc') }}
          </p>
          <CodeBlock :title="t('blog.db.basics.diagramTitle')" :code="codes[11]" />
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.db.basics.summaryIntro') }}
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.db.basics.summary1') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.db.basics.summary2') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.db.basics.summary3') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.db.basics.summary4') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.db.basics.summary5') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">&#10003;</span>
              <span>{{ t('blog.db.basics.summary6') }}</span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Database Basics: From Zero to Real Tables - Koeuk Dev'
})
const { t } = useI18n()

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
</script>

<style scoped>
.inline-code {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-red-500 dark:text-red-400;
}

.tip-box {
  @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300;
}

.warning-box {
  @apply p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-sm text-red-700 dark:text-red-300;
}
</style>
