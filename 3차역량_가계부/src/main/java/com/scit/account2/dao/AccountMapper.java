package com.scit.account2.dao;

import java.util.ArrayList;

import com.scit.account2.vo.Account;
import com.scit.account2.vo.Member;

public interface AccountMapper {
	public int insertMember(Member member);
	public String selectMember(Member member);
	public int insertAccount(Account account);
	public ArrayList<Account> selectAccount();
}