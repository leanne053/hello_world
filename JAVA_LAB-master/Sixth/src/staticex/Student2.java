package staticex;

public class Student2 {
	private static int serialNum = 1000;
	int studentId;
	String studentName;
	int grade;
	String address;
	
	public Student2() {
		serialNum++;
		studentId = serialNum;
	}
	
	public String getStudentName() {
		return studentName;
	}
	
	public void setStudentName(String name) {
		studentName = name;
	}
	public static int getSerialNum() {
		int i =10;
		return serialNum;
	}
	public static void setSerialNum() {
		Student2.serialNum = serialNum;
	}

}
