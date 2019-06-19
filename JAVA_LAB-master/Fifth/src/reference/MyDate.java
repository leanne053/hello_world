package reference;

public class MyDate {
	private int day;
	private int month;
	private int year;
	private boolean isValid= true;
	
	public MyDate(int day, int month, int year) {
		setYear(year);
		setMonth(month);
		setDay(day);


	}
	public MyDate() {
		super();
	}
	public int getDay() {
		return day;
	}
	public void setDay(int day) {
		switch(month) {
		case 1: case 3: case 5: case 7: case 8: case 10: case 12:
			if(day<1 || day>31) {
				isValid=false;
			}else {
				this.day = day;
			}
			break;
		case 4: case 6: case 9: case 11:
			if(day<1 || day>30) {
				isValid=false;
			}else {
				this.day = day;
			}
			break;
		case 2:
			if(day<1 || day>28) {
				isValid=false;
			}else {
				this.day = day;
			}
			break;
		}
	}
	
	public int getMonth() {
		return month;
	}
	public void setMonth(int month) {
		this.month = month;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	
	public String isValid(){
		if(isValid) {
			return "유효한 날짜 입니다";
		}else {
			return "유효한 날짜가  아닙니다.";
		}
	}
}

