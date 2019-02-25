package com.scit.accountBook.vo;

public class AccountOwner {
	private String id;
	private String pw;

	public AccountOwner(String id, String pw) {
		this.id = id;
		this.pw = pw;
	}

	public AccountOwner() {
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	@Override
	public String toString() {
		return "accountOwener [id=" + id + ", pw=" + pw + "]";
	}

}
