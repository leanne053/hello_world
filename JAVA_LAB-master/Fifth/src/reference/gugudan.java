package reference;

import java.util.Scanner;

public class gugudan {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("원하는 단 입력: ");
		int n = sc.nextInt();
		System.out.print("원하는 행 입력: ");
		int y = sc.nextInt();
		int result=0;
		System.out.println(n+"단 구구단");
		for(int i=1;i<=y;i++) {
			result=n*i;
			System.out.println(n+"*"+i+" = "+result);
		}
	}

}
