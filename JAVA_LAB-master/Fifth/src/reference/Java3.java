package reference;
import java.util.Scanner;

public class Java3 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("수 입력: ");
		int input = sc.nextInt();
		int result=1;
		if(input<=1) {
			result =input;
		}else {
			for(int i=1;i<=input;i++) {
				result *= i;
			}
		}
		System.out.println(input+"! = "+result);
	}
}
