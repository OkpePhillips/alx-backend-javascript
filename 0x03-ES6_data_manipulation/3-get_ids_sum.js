export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    return 0;
  }

  return studentsList.reduce((sum, student) => sum + student.id, 0);
}
