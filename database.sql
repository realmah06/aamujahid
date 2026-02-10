-- Table for employees
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    hire_date DATE,
    salary DECIMAL(10, 2)
);

-- Table for stores
CREATE TABLE stores (
    store_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(255)
);

-- Table for suppliers
CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    contact_info VARCHAR(255)
);

-- Table for waybills
CREATE TABLE waybills (
    waybill_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_id INT,
    invoice_number VARCHAR(100),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);

-- Table for adjustments
CREATE TABLE adjustments (
    adjustment_id INT PRIMARY KEY AUTO_INCREMENT,
    store_id INT,
    amount DECIMAL(10, 2),
    description TEXT,
    FOREIGN KEY (store_id) REFERENCES stores(store_id)
);

-- Table for invoices
CREATE TABLE invoices (
    invoice_id INT PRIMARY KEY AUTO_INCREMENT,
    store_id INT,
    total_amount DECIMAL(10, 2),
    issue_date DATE,
    FOREIGN KEY (store_id) REFERENCES stores(store_id)
);

-- Table for bank accounts
CREATE TABLE bank_accounts (
    account_id INT PRIMARY KEY AUTO_INCREMENT,
    bank_name VARCHAR(100),
    account_number VARCHAR(100),
    balance DECIMAL(10, 2)
);

-- Table for expenses
CREATE TABLE expenses (
    expense_id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT,
    amount DECIMAL(10, 2),
    date DATE
);

-- Table for transaction confirmations
CREATE TABLE transaction_confirmations (
    confirmation_id INT PRIMARY KEY AUTO_INCREMENT,
    invoice_id INT,
    status VARCHAR(50),
    confirmation_date DATE,
    FOREIGN KEY (invoice_id) REFERENCES invoices(invoice_id)
);