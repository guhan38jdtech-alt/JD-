-- ============================================================
--  JD TECH — MySQL Setup Script
--  Run this once in your MySQL server before starting the app
-- ============================================================

-- 1. Create the database
CREATE DATABASE IF NOT EXISTS attendance_db
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- 2. Create a dedicated user (change password as needed)
CREATE USER IF NOT EXISTS 'attendance_user'@'localhost'
    IDENTIFIED BY 'attendance_pass';

-- 3. Grant privileges
GRANT ALL PRIVILEGES ON attendance_db.* TO 'attendance_user'@'localhost';
FLUSH PRIVILEGES;

-- 4. Switch to the database
USE attendance_db;

-- ============================================================
--  Tables are auto-created by Flask-SQLAlchemy (db.create_all)
--  when you run: python app.py
--  This script only sets up the DB and user.
-- ============================================================

-- Optional: verify setup
SELECT 'MySQL setup complete! Now run: python app.py' AS status;
