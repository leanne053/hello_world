package com.scit.sangaccount.dao;

import java.util.ArrayList;

import com.scit.sangaccount.vo.Account;
import com.scit.sangaccount.vo.Member;

public interface AccountMapper {
	public int insertMember(Member member);
	public Member selectMember(Member member);
	public int insertAccount(Account account);
	public ArrayList<Account> selectAccount(String id);
}
