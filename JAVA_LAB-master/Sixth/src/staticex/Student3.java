package staticex;

public class Student3 {
	String studentName;
	static int studentId;
	static int studentCardNumber;
	
	public Student3() {
		studentId++;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public static int getStudentCardNumber() {
		studentCardNumber = studentId +100; 
		return studentCardNumber;
	}

	public static void setStudentCardNumber(int studentCardNumber) {
		Student3.studentCardNumber = studentCardNumber;
	}
	
}
