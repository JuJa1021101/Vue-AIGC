-- 创建数据库
CREATE DATABASE IF NOT EXISTS noteBook CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE noteBook;

-- 创建用户表
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    nickname VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 创建笔记表
CREATE TABLE IF NOT EXISTS note (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    note_content TEXT,
    head_img TEXT,
    note_type VARCHAR(50),
    userId INT NOT NULL,
    nickname VARCHAR(50),
    c_time VARCHAR(50),
    m_time VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id)
);

-- 插入测试数据（可选）
INSERT INTO users (username, password, nickname) VALUES 
('admin', '123456', '管理员'),
('test', '123456', '测试用户');