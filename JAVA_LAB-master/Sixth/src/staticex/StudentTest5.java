package staticex;

public class StudentTest5 {

	public static void main(String[] args) {
		Student3 studentLee = new Student3();
		studentLee.setStudentName("이지원");
		System.out.println(studentLee.studentName+"카드번호: "+studentLee.getStudentCardNumber());
		
		Student3 studentSon = new Student3();
		studentSon.setStudentName("손수경");
		System.out.println(studentSon.studentName+"카드번호: "+studentSon.getStudentCardNumber());
	}

}
