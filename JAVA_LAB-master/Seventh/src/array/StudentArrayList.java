package array;

import java.util.ArrayList;

public class StudentArrayList {

	public static void main(String[] args) {
		ArrayList<Student> str = new ArrayList<Student>();
		
		str.add(new Student(1001, "James"));
		str.add(new Student(1002, "Tomas"));
		str.add(new Student(1003, "Edward"));
		
		for(int i=0;i<str.size();i++) {
			Student st = str.get(i);
			st.showStudentInfo();
		}

	}

}
