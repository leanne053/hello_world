package com.scit.accountBook.vo;

public class AccountBook {
	private String accountseq;
	private String id;
	private String title;
	private String content;
	private String flag;
	private int amount;
	private String eventdate;
	private String indate;
	public AccountBook(String accountseq, String id, String title, String content, String flag, int amount,
			String eventdate, String indate) {
		super();
		this.accountseq = accountseq;
		this.id = id;
		this.title = title;
		this.content = content;
		this.flag = flag;
		this.amount = amount;
		this.eventdate = eventdate;
		this.indate = indate;
	}
	public AccountBook() {
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
	public String getEventdate() {
		return eventdate;
	}
	public void setEventdate(String eventdate) {
		this.eventdate = eventdate;
	}
	public String getIndate() {
		return indate;
	}
	public void setIndate(String indate) {
		this.indate = indate;
	}
	@Override
	public String toString() {
		return "AccontBook [accountseq=" + accountseq + ", id=" + id + ", title=" + title + ", content=" + content
				+ ", flag=" + flag + ", amount=" + amount + ", eventdate=" + eventdate + ", indate=" + indate + "]";
	}
	
	
}
