package aa;

public class AA {
	public static void main(String[] args) {

		Parent p = new Child();
		Child c = new Child();

		System.out.println("p.i ="+ p.i);
		p.print();

		System.out.println("c.i = " + c.i);
		c.print();
	}	
}

class Parent{
	int i = 100;
	public void print(){
		System.out.println("Parent");
	}
}

class Child extends Parent{
	int i = 200;

	public void print(){
		System.out.println("Child");

	}

	

}