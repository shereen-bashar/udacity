CREATE TABLE Students (
    StudentID SERIAL PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Age INT NOT NULL,
    Gender VARCHAR(10) NOT NULL
);

CREATE TABLE Courses (
    CourseID SERIAL PRIMARY KEY,
    CourseName VARCHAR(50) NOT NULL,
    Credits INT NOT NULL CHECK (Credits > 0)
);

CREATE TABLE Enrollments (
    EnrollmentID SERIAL PRIMARY KEY,
    StudentID INT NOT NULL,
    CourseID INT NOT NULL,
    Grade VARCHAR(2) NOT NULL,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID) ON DELETE CASCADE,
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID) ON DELETE CASCADE
);

INSERT INTO Students (Name, Age, Gender) VALUES
('John', 20, 'Male'),
('Emily', 22, 'Female'),
('Michael', 21, 'Male'),
('Sarah', 19, 'Female'),
('David', 23, 'Male');

INSERT INTO Courses (CourseName, Credits) VALUES
('Math', 3),
('Science', 4),
('History', 3),
('English', 3),
('Geography', 3);

INSERT INTO Enrollments (StudentID, CourseID, Grade) VALUES
(1, 1, 'A'),
(2, 2, 'B'),
(3, 3, 'C'),
(4, 4, 'B+'),
(5, 5, 'A-');