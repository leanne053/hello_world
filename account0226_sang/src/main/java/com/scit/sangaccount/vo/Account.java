package com.scit.sangaccount.vo;

public class Account {
	private String accountSeq;
	private String id;
	private String title;
	private String contest;
	private String indate;
	private String eventdate;
	private String amount;
	private String flag;
	private int price;
	public Account(String accountSeq, String id, String title, String contest, String indate, String eventdate,
			String amount, String flag, int price) {
		super();
		this.accountSeq = accountSeq;
		this.id = id;
		this.title = title;
		this.contest = contest;
		this.indate = indate;
		this.eventdate = eventdate;
		this.amount = amount;
		this.flag = flag;
		this.price = price;
	}
	public Account() {
		super();
	}
	public String getAccountSeq() {
		return accountSeq;
	}
	public void setAccountSeq(String accountSeq) {
		this.accountSeq = accountSeq;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContest() {
		return contest;
	}
	public void setContest(String contest) {
		this.contest = contest;
	}
	public String getIndate() {
		return indate;
	}
	public void setIndate(String indate) {
		this.indate = indate;
	}
	public String getEventdate() {
		return eventdate;
	}
	public void setEventdate(String eventdate) {
		this.eventdate = eventdate;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Account [accountSeq=" + accountSeq + ", id=" + id + ", title=" + title + ", contest=" + contest
				+ ", indate=" + indate + ", eventdate=" + eventdate + ", amount=" + amount + ", flag=" + flag
				+ ", price=" + price + "]";
	}
	
	
}
