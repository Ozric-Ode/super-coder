# super-coder

-------------------------------------------
## Problem Statement:
Our idea is to create a common platform, a kind of online judge
where admin/professor can host their contest in which they will set various problems of
various difficulty involving concepts of various data structures and algorithms.
On this platform students will attempt the contest simultaneously and will try different
approaches to solve the problems whose verdict will be shown after the submission, by
which professor will be able to check easily who is able to solve their problems and who
fail to do so.
To avoid plagiarism,in future plagiarism detectors will also be implemented to verify whether the
submission is plagiarized or not. The professor can also explain their approaches
regarding the various problems involving various concepts of different algorithms and
data structures by writing blogs on the platform which will also receive the feedback of
students and students will also have the freedom to exchange their thoughts between
themselves thereby resulting in the upliftment of overall coding culture of the institute.


## APIs Used:
- [Judge0](https://judge0.com/)


## Requirements:

- NodeJS v12+ with NPM
- Git

-------------------------------------------

## Installation:

Clone and Install Packages
```bash
git clone https://github.com/Ozric-Ode/super-coder
npm install
```

Create ``.env`` file

```env
PORT=3000 // Your preferred port for running the super coder locally.
JUDGEZERO_API_KEY=
JWT_KEY=//your preferred key
DB_HOST=localhost // Host where Database is added
DB_USER=// your DB username
DB_PASSWORD=// YOUR DB PASSWORD
DB_NAME=SUPERCODER
```
Databse Installation
```
The dump file is located in our repository.
Open cmd in the bin folder of MySQL Server (for eg. -cd C:\ProgramFiles\MySQL\MySQL Server 8.0\bin)
Restore our database ‘SUPERCODER’ from where you downloaded the dump file of our database.
Run this command:- >mysql -u root -p supercoder < "{Location where you downloaded the sql dump file}”
Our Database of SUPERCODER will be added to your local host server of mysql on your machine.
```
-------------------------------------------

## Running:

```bash
node ./src/index.js’
```

### To preview the app, visit ``http://localhost:3000/``
