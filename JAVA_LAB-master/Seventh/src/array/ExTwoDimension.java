package array;

public class ExTwoDimension {

	public static void main(String[] args) {
		int[][] arr = new int[13][2];
		
		for(int i=0;i<arr.length;i++) {
			for(int j=0;j<arr[i].length;j++) {
				arr[i][j]=97+j+i;
				System.out.print((char)(arr[i][j]));
			}
			System.out.println();
		}

	}

}
