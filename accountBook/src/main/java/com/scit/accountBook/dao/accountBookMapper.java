package com.scit.accountBook.dao;

import java.util.ArrayList;

import com.scit.accountBook.vo.AccountBook;

public interface accountBookMapper {
	public int insertAccountBook(AccountBook accountbook);
	public ArrayList<AccountBook> booklist();
}
