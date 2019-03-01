package com.scit.account2.vo;

public class Account {
	private String accountseq;
	private String id;
	private String title;
	private String content;
	private String flag;
	private int amount;
	private String evendate;
	private String indate;
	private int price;
	public Account(String accountseq, String id, String title, String content, String flag, int amount, String evendate,
			String indate, int price) {
		super();
		this.accountseq = accountseq;
		this.id = id;
		this.title = title;
		this.content = content;
		this.flag = flag;
		this.amount = amount;
		this.evendate = evendate;
		this.indate = indate;
		this.price = price;
	}
	public Account() {
		super();
	}
	public String getAccountseq() {
		return accountseq;
	}
	public void setAccountseq(String accountseq) {
		this.accountseq = accountseq;
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
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getEvendate() {
		return evendate;
	}
	public void setEvendate(String evendate) {
		this.evendate = evendate;
	}
	public String getIndate() {
		return indate;
	}
	public void setIndate(String indate) {
		this.indate = indate;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Account [accountseq=" + accountseq + ", id=" + id + ", title=" + title + ", content=" + content
				+ ", flag=" + flag + ", amount=" + amount + ", evendate=" + evendate + ", indate=" + indate + ", price="
				+ price + "]";
	}
	
	
}
