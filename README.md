# JD TECH — Employee Attendance Management System
### Flask + MySQL/MariaDB Edition

## Quick Setup

### Step 1 — Install Python dependencies
```bash
pip install -r requirements.txt
```

### Step 2 — Setup MySQL database
```bash
mysql -u root -p < mysql_setup.sql
```

### Step 3 — Configure DB connection in app.py (line 14)
```python
app.config['SQLALCHEMY_DATABASE_URI'] = (
    'mysql+pymysql://YOUR_USER:YOUR_PASSWORD@localhost:3306/attendance_db'
)
```

### Step 4 — Run the app
```bash
python app.py
```
Tables are auto-created on first run by Flask-SQLAlchemy.

### Step 5 — Open browser → http://localhost:5000
Default login: admin / admin123

## Tech Stack
- Backend: Python 3, Flask
- ORM: Flask-SQLAlchemy
- Database: MySQL / MariaDB
- Driver: PyMySQL

## Common Issues
- "Access denied" → wrong credentials in DATABASE_URI
- "Can't connect" → start MySQL: sudo systemctl start mysql
- "No module pymysql" → pip install pymysql
