package com.scit.sangaccount.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.scit.sangaccount.vo.Account;
import com.scit.sangaccount.vo.Member;

@Repository
public class AccountDAO {
	
	@Autowired
	SqlSession session;
	
	public int insertMember(Member member) {
		int result=0;
		AccountMapper mapper=session.getMapper(AccountMapper.class);
		try {
			result=mapper.insertMember(member);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
	public Member selectMember(Member member) {
		Member result=null;
		AccountMapper mapper=session.getMapper(AccountMapper.class);
		try {
			result=mapper.selectMember(member);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	public int insertAccount(Account account) {
		int result=0;
		AccountMapper mapper=session.getMapper(AccountMapper.class);
		try {
			result=mapper.insertAccount(account);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	public ArrayList<Account> selectAccount(String id){
		ArrayList<Account> result=null;
		AccountMapper mapper=session.getMapper(AccountMapper.class);
		try {
			result=mapper.selectAccount(id);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return result;
	}
}
