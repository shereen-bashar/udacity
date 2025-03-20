-- queries.sql
-- 1. Retrieve all students sorted by age in ascending order.
SELECT * FROM Students ORDER BY Age ASC;

-- 2. Retrieve the names of students older than 20.
SELECT Name FROM Students WHERE Age > 20;

-- 3. Retrieve the names of male students whose names start with 'J'.
SELECT Name FROM Students WHERE Name LIKE 'J%' AND Gender = 'Male';

-- 4. Retrieve the courses sorted by credits in descending order.
SELECT * FROM Courses ORDER BY Credits DESC;

-- 5. Retrieve the names of students who are either 19 years old or younger than 22.
SELECT Name FROM Students WHERE Age = 19 OR Age < 22;

-- 6. Retrieve the names of male students who are not named 'John'.
SELECT Name FROM Students WHERE Gender = 'Male' AND Name != 'John';

-- 7. Retrieve the student names and grades for the course with the highest credits.
SELECT Students.Name, Enrollments.Grade
FROM Students
INNER JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
INNER JOIN Courses ON Enrollments.CourseID = Courses.CourseID
WHERE Courses.Credits = (SELECT MAX(Credits) FROM Courses);

-- 8. Retrieve the names of students who have not enrolled in any course.
SELECT Name FROM Students WHERE StudentID NOT IN (SELECT DISTINCT StudentID FROM Enrollments);

-- 9. Retrieve the names of students who have enrolled in either the 'Math' or 'Science' course.
SELECT DISTINCT Students.Name
FROM Students
INNER JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
INNER JOIN Courses ON Enrollments.CourseID = Courses.CourseID
WHERE Courses.CourseName IN ('Math', 'Science');

-- 10. Retrieve the names of students who are either younger than 20 or older than 22 and have enrolled in a course.
SELECT DISTINCT Students.Name
FROM Students
INNER JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
WHERE Age < 20 OR Age > 22;

-- 11. Retrieve the names of male students who are younger than 25.
SELECT Name FROM Students WHERE Gender = 'Male' AND Age < 25;

-- 12. Retrieve the names of students who have grades higher than 'B' in any course.
SELECT DISTINCT Students.Name
FROM Students
INNER JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
WHERE Enrollments.Grade > 'B';

-- 13. Retrieve the course names along with the number of students enrolled in each course.
SELECT Courses.CourseName, COUNT(Enrollments.StudentID) AS Num_Students
FROM Courses
LEFT JOIN Enrollments ON Courses.CourseID = Enrollments.CourseID
GROUP BY Courses.CourseName;

-- 14. Retrieve the names of students along with the courses they are enrolled in, sorted alphabetically by student name.
SELECT Students.Name, Courses.CourseName
FROM Students
INNER JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
INNER JOIN Courses ON Enrollments.CourseID = Courses.CourseID
ORDER BY Students.Name;

-- 15. Retrieve the names of students who are between 18 and 25 years old.
SELECT Name FROM Students WHERE Age BETWEEN 18 AND 25;

-- 16. Retrieve the names of students who have grades between 'B' and 'A' in any course.
SELECT DISTINCT Students.Name
FROM Students
INNER JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
WHERE Enrollments.Grade BETWEEN 'B' AND 'A';

-- 17. Retrieve the names of students who are enrolled in courses with credits between 3 and 4.
SELECT DISTINCT Students.Name
FROM Students
INNER JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
INNER JOIN Courses ON Enrollments.CourseID = Courses.CourseID
WHERE Courses.Credits BETWEEN 3 AND 4;

-- 18. Retrieve the names of students who have enrolled in courses with grades between 'B-' and 'A'.
SELECT DISTINCT Students.Name
FROM Students
INNER JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
INNER JOIN Courses ON Enrollments.CourseID = Courses.CourseID
WHERE Enrollments.Grade BETWEEN 'B-' AND 'A';
