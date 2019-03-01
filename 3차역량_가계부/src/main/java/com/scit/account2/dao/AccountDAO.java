package com.scit.account2.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.scit.account2.vo.Account;
import com.scit.account2.vo.Member;

@Repository
public class AccountDAO {
	@Autowired
	SqlSession session;
	
	public int insertMember(Member member) {
		int result=0;
		AccountMapper mapper= session.getMapper(AccountMapper.class);
		try {
			result=mapper.insertMember(member);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	public String selectMember(Member member) {
		String result=null;
		AccountMapper mapper= session.getMapper(AccountMapper.class);
		try {
			result=mapper.selectMember(member);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	public int insertAccount(Account account) {
	int result=0;
	AccountMapper mapper= session.getMapper(AccountMapper.class);
	try {
		result=mapper.insertAccount(account);
	}catch(Exception e) {
		e.printStackTrace();
	}
	return result;
}
	public ArrayList<Account> selectAccount(){
		ArrayList<Account> result=null;
		AccountMapper mapper=session.getMapper(AccountMapper.class);
		try {
		result=mapper.selectAccount();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return result;
	}

}
