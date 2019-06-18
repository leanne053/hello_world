package cooperation;

public class Taxi {
	int money;
	String taxiName;
	
	public Taxi(String taxiName) {
		this.taxiName=taxiName;
	}
	public void take(int money) {
		this.money+=10000;
	}
	public void showInfo() {
		System.out.println(taxiName+"택시회사는 수입이"+money+"입니다.");
	}
}
