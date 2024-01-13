export default function updateStudentGradeByCity(students, city, newGrades) {
  const selectedStudents = students.filter((student) => student.location === city);
  const updatedStudents = selectedStudents.map((student) => {
    const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);
    const newGrade = gradeInfo ? gradeInfo.grade : 'N/A';
    return {
      ...student,
      grade: newGrade,
    };
  });
  return updatedStudents;
}
