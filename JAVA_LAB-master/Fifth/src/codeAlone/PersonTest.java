package codeAlone;

public class PersonTest {

	public static void main(String[] args) {
			Person p = new Person();
			p.age=40;
			p.name="James";
			p.isMarried = true;
			p.children = 3;
			
			System.out.println("��°��");
			System.out.println("�� ����� ���� "+ p.age);
			System.out.println("�� ����� �̸� "+ p.name);
			System.out.println("�� ����� ��ȥ ���� " + p.isMarried);
			System.out.println("�� ����� �ڳ� �� "+ p.children);
		}

}
