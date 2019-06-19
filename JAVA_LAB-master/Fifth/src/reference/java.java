package reference;

import java.util.Scanner;

public class java {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("재귀함수를 하고자 하는 수: ");
		int input = sc.nextInt();
		sc.close();

		System.out.println(factorial(input));
	}

	public static int factorial(int n) {
		if (n <= 1) {
			return n;
		}

		else {
			return factorial(n-1) * n;

		}

	}
	
	

}